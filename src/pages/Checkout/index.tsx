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
import LoaderModal from '../../components/LoaderModal';
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
    const [transactionLoading, setTransactionLoading] = useState(false);

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
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                fullName: Yup.string()
                    .required("Nome ?? um campo obrigat??rio"),
                phoneNumber: Yup.string()
                    .required("Celular ?? um campo obrigat??rio"),
                email: Yup.string()
                    .required("Email do ingresso ?? um campo obrigat??rio"),
                cardNumber: Yup.string()
                    .min(16, "N??mero do cart??o deve conter 16 d??gitos")
                    .max(16, "N??mero do cart??o deve conter 16 d??gitos")
                    .required("N??mero do cart??o ?? um campo obrigat??rio"),
                CVV: Yup.string()
                    .min(3, "C??digo deve conter 3 d??gitos")
                    .max(3, "C??digo deve conter 3 d??gitos")
                    .required("C??digo de seguran??a ?? um campo obrigat??rio"),
                expirationDate: Yup.date()
                    .required("Data de expira????o ?? um campo obrigat??rio"),
            });
            await schema.validate(data, {
                abortEarly: false,
            });

            setTransactionLoading(true);
            let userAux = { ...user };
            userAux.purchases.push({
                festivity: { ...festivity },
                code: randomString()
            });
            updateUser(userAux);
        } catch (err) {
            setTransactionLoading(false);
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
                <h2>Dados do cart??o</h2>
                <FormInput
                    name='cardNumber'
                    type="text"
                    maxLength={16}
                    placeholder='N??mero do cart??o'
                />
                <FormInput
                    name='CVV'
                    type="text"
                    maxLength={3}
                    placeholder='C??digo de seguran??a'
                />
                <DatePicker
                    placeholderText='Data de expira????o'
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
            <LoaderModal
                isOpen={transactionLoading}
                onRequestClose={() => setTransactionLoading(false)}
                callbackLink="/"
            />
        </Container>
    )
}