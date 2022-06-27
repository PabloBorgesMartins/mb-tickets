import { useEffect, useRef, useState } from 'react';
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
import { LoaderModal } from '../../components/LoaderModal';
/*Hooks*/
import { useAuth } from '../../hooks/auth';
/*Interfaces*/
import { IUpdateCredentials } from '../../interfaces/auth';
interface Errors {
    [key: string]: string;
}

export function ProfileEdit() {

    const { user, updateUser } = useAuth();
    const formRef = useRef<FormHandles>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit: SubmitHandler<IUpdateCredentials> = async data => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                fullName: Yup.string()
                    .required("Nome completo é um campo obrigatório"),
                email: Yup.string()
                    .required("Email é um campo obrigatório"),
            });
            await schema.validate(data, {
                abortEarly: false,
            });

            setLoading(true);

            let userAux = {
                ...user,
                fullName: data.fullName,
                email: data.email
            };
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

    useEffect(() => {
        if (user) {
            formRef.current?.setData({
                fullName: user.fullName,
                email: user.email,
            });
        }
    }, [user])

    return (
        <Container>
            <h1>Editar Perfil</h1>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Divider />
                <h2>Dados principais</h2>
                <FormInput
                    name='fullName'
                    type="text"
                    placeholder='Nome Completo'
                />
                <FormInput
                    name='email'
                    type="text"
                    placeholder='Email'
                />
                <button
                    type='submit'
                >
                    Editar
                </button>
            </Form>
            <LoaderModal
                isOpen={loading}
                onRequestClose={() => setLoading(false)}
                callbackLink="/perfil"
            />
        </Container>
    )
}