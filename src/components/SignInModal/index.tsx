import { useRef } from 'react';
import {
    Form,
} from './styles';
/*Components*/
import FormInput from '../FormInput';
import { useModal } from '../../hooks/modal';
import { useAuth } from '../../hooks/auth';
/*Libraries*/
import Modal from 'react-modal';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiX } from 'react-icons/fi';
/*Interfaces*/
import {
    ISignInCredentials
} from '../../interfaces/auth';
interface Errors {
    [key: string]: string;
}

Modal.setAppElement('#root');

export function SignInModal() {

    const { isModalSignInOpen, setIsModalSignInOpen } = useModal();
    const { signIn } = useAuth();
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<ISignInCredentials> = async data => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email("Digite um email válido")
                    .required("Email é um campo obrigatório"),
                password: Yup.string()
                    .min(6, "Senha deve conter pelo menos 6 caracteres")
                    .required("Senha é um campo obrigatório"),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            signIn(data);
            setIsModalSignInOpen(false);
        } catch (err) {
            const validationErrors = {} as Errors;
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(error => {
                    if (error.path) {
                        validationErrors[error.path] = error.message;
                    }
                });
                formRef.current?.setErrors(validationErrors);
            }
        }
    }

    return (
        <Modal
            isOpen={isModalSignInOpen}
            onRequestClose={() => setIsModalSignInOpen(false)}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                onClick={() => setIsModalSignInOpen(false)}
                className="react-modal-close"
            >
                <FiX color="#737380" size={24} />
            </button>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h2>Faça Login</h2>
                <FormInput
                    name='email'
                    placeholder='Email'
                />
                <FormInput
                    name='password'
                    placeholder='Senha'
                    isPassword
                />
                <button type='submit'>
                    Fazer login
                </button>
            </Form>
        </Modal>
    )
}