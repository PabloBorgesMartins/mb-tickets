import { useRef } from 'react';
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
import Select from '../../components/Select';
/*Hooks*/
import { useAuth } from '../../hooks/auth';
/*Interfaces*/
import { IFestivityData } from '../../interfaces/festivity';
interface Errors {
    [key: string]: string;
}

export function CreateEvent() {

    const { user } = useAuth();
    const formRef = useRef<FormHandles>(null);

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
                    .required("Valor é um campo obrigatório"),
                image: Yup.string()
                    .required("Link da imagem é um campo obrigatório"),
                date: Yup.string()
                    .required("Data é um campo obrigatório"),
            });
            await schema.validate(data, {
                abortEarly: false,
            });


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
    }

    const hours = [
        { value: '6:00', label: '6:00' },
        { value: '8:00', label: '8:00' },
        { value: '10:00', label: '10:00' },
        { value: '12:00', label: '12:00' },
        { value: '14:00', label: '14:00' },
        { value: '16:00', label: '16:00' },
    ]

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
                />
                <Select
                    placeholder="Horário do evento"
                    options={hours}
                    name='time'
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
        </Container>
    )
}