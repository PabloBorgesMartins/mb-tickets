import { useRef, useState } from 'react';
import {
    Container,
    Form,
    Divider
} from './styles';
/*Libraries*/
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';
/*Components*/
import FormInput from '../../components/FormInput';
import DatePicker from '../../components/DatePicker';
import { LoaderModal } from '../../components/LoaderModal';
/*Hooks*/
import { useAuth } from '../../hooks/auth';
/*Interfaces*/
import { IFestivityData, handleCreateFestivity } from '../../interfaces/festivity';
interface Errors {
    [key: string]: string;
}

export function CreateEvent() {

    const { user, updateUser } = useAuth();
    const formRef = useRef<FormHandles>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit: SubmitHandler<IFestivityData> = async data => {
        console.log(data);
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                title: Yup.string()
                    .required("Título é um campo obrigatório"),
                description: Yup.string()
                    .required("Descrição é um campo obrigatório"),
                amount: Yup.number()
                    .required("Valor do ingresso é um campo obrigatório"),
                image: Yup.string()
                    .required("Link da imagem é um campo obrigatório"),
                date: Yup.date()
                    .required("Data é um campo obrigatório"),
                state: Yup.string()
                    .required("Estado é um campo obrigatório"),
                city: Yup.string()
                    .required("Cidade é um campo obrigatório"),
                district: Yup.string()
                    .required("Bairro é um campo obrigatório"),
                street: Yup.string()
                    .required("Rua é um campo obrigatório"),
                number: Yup.string()
                    .required("Número é um campo obrigatório"),
            });
            await schema.validate(data, {
                abortEarly: false,
            });

            setLoading(true);
            let response = await handleCreateFestivity({
                ...data,
                userId: user.id
            });

            let userAux = { ...user };
            userAux.myFestivities.push({
                ...data,
                id: response.festivity.id,
                createdAt: new Date()
            })
            updateUser(userAux);
        } catch (err) {
            setLoading(false);
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
    }

    return (
        <Container>
            <h1>Registre seu evento</h1>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Divider />
                <h2>Dados principais</h2>
                <FormInput
                    name='title'
                    type="text"
                    placeholder='Título'
                />
                <FormInput
                    name='description'
                    type="text"
                    placeholder='Descrição'
                />
                <FormInput
                    name='image'
                    type="text"
                    placeholder='Link da imagem'
                />
                <FormInput
                    name='amount'
                    type="number"
                    placeholder='Valor do ingresso'
                />
                <DatePicker
                    placeholderText='Data do evento'
                    name='date'
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="dd/MM/yy h:mm aa"
                />
                <Divider />
                <h2>Endereço</h2>
                <FormInput
                    name='state'
                    type="text"
                    maxLength={2}
                    onChange={evt => { evt.target.value = evt.target.value.toUpperCase() }}
                    placeholder='Estado'
                />
                <FormInput
                    name='city'
                    type="text"
                    placeholder='Cidade'
                />
                <FormInput
                    name='district'
                    type="text"
                    placeholder='Bairro'
                />
                <FormInput
                    name='street'
                    type="text"
                    placeholder='Logradouro'
                />
                <FormInput
                    name='number'
                    type="number"
                    placeholder='Número'
                />
                <button
                    type='submit'
                >
                    Registrar
                </button>
            </Form>
            <LoaderModal
                isOpen={loading}
                onRequestClose={() => setLoading(false)}
                callbackLink="/"
            />
        </Container>
    )
}