import { useRef, useEffect, useState, useCallback } from 'react';
import {
    Container,
    Form,
    Divider
} from './styles';
/*Libraries*/
import { SubmitHandler, FormHandles } from '@unform/core';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
/*Components*/
import FormInput from '../../components/FormInput';
import Loader from '../../components/Loader';
import DatePicker from '../../components/DatePicker';
/*Hooks*/
import { useAuth } from '../../hooks/auth';
/*Interfaces*/
import { IFestivityData, IFestivity, showFestivity } from '../../interfaces/festivity';
interface Errors {
    [key: string]: string;
}

export function CheckoutPage() {

    let { id } = useParams();
    const { user, updateUser } = useAuth();
    const formRef = useRef<FormHandles>(null);
    const [festivity, setFestivity] = useState({} as IFestivity);
    const [loading, setLoading] = useState(true);

    function randomString() {
        let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < 20; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                if (id) {
                    let response = await showFestivity(id);
                    setFestivity(response.festivity);
                }
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log(err);
            }
        }
        fetchData();
    }, [id]);

    const handleSubmit: SubmitHandler<IFestivityData> = useCallback(async data => {
        console.log(data);
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                fullName: Yup.string()
                    .required("Nome é um campo obrigatório"),
                phoneNumber: Yup.string()
                    .required("Celular é um campo obrigatório"),
                email: Yup.string()
                    .required("Email do ingresso é um campo obrigatório"),
                cardNumber: Yup.string()
                    .min(16, "Número do cartão deve conter 16 dígitos")
                    .max(16, "Número do cartão deve conter 16 dígitos")
                    .required("Número do cartão é um campo obrigatório"),
                CVV: Yup.string()
                    .min(3, "Código deve conter 3 dígitos")
                    .max(3, "Código deve conter 3 dígitos")
                    .required("Código de segurança é um campo obrigatório"),
                expirationDate: Yup.date()
                    .required("Data de expiração é um campo obrigatório"),
            });
            await schema.validate(data, {
                abortEarly: false,
            });

            let userAux = { ...user };
            userAux.purchases.push({
                festivity: { ...festivity },
                code: randomString()
            });
            updateUser(userAux);
        } catch (err) {
            const validationErrors = {} as Errors;
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach((error) => {
                    if (error.path) {
                        validationErrors[error.path] = error.message;
                    }
                });
                formRef.current?.setErrors(validationErrors);
            }
        }
    }, [festivity, updateUser, user]);

    if (loading) {
        return (<Loader />);
    }

    return (
        <Container>
            <h1>Comprar Ingresso</h1>
            <Divider />
            <h2>{festivity.title}</h2>
            <p>
                {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(festivity.date)
                )}
            </p>
            <p>{festivity.city} - {festivity.state}</p>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Divider />
                <h2>Dados do comprador</h2>
                <FormInput
                    name='fullName'
                    type="text"
                    placeholder='Nome completo'
                />
                <FormInput
                    name='email'
                    type="text"
                    placeholder='Email'
                />
                <FormInput
                    name='phoneNumber'
                    type="text"
                    placeholder='Celular'
                />
                <Divider />
                <h2>Dados do cartão</h2>
                <FormInput
                    name='cardNumber'
                    type="text"
                    maxLength={16}
                    placeholder='Número do cartão'
                />
                <FormInput
                    name='CVV'
                    type="text"
                    maxLength={3}
                    placeholder='Código de segurança'
                />
                <DatePicker
                    placeholderText='Data de expiração'
                    name='expirationDate'
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    showFullMonthYearPicker
                    showFourColumnMonthYearPicker
                />
                <button
                    type='submit'
                >
                    Comprar
                </button>
            </Form>
        </Container>
    )
}