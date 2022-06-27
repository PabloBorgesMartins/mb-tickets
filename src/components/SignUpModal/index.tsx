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
    ISignUpCredentials
} from '../../interfaces/auth';
interface Errors {
    [key: string]: string;
}

Modal.setAppElement('#root');

export function SignUpModal() {

    const { isModalSignUpOpen, setIsModalSignUpOpen } = useModal();
    const { signUp } = useAuth();
    const formRef = useRef<FormHandles>(null);

    const handleSubmit: SubmitHandler<ISignUpCredentials> = async data => {
        console.log(data);
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                fullName: Yup.string()
                    .required("Nome completo é um campo obrigatório"),
                email: Yup.string()
                    .email("Digite um email válido")
                    .required("Email é um campo obrigatório"),
                password: Yup.string()
                    .min(6, "Senha deve conter pelo menos 6 caracteres")
                    .required("Senha é um campo obrigatório"),
                passwordConfirmation: Yup.string()
                    .required("Confirmar senha é um campo obrigatório")
                    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais'),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            signUp(data);
            setIsModalSignUpOpen(false);
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

    return (
        <Modal
            isOpen={isModalSignUpOpen}
            onRequestClose={() => setIsModalSignUpOpen(false)}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"            
        >
            <button
                type='button'
                onClick={() => setIsModalSignUpOpen(false)}
                className="react-modal-close"
            >
                <FiX color="#737380" size={24} />
            </button>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <h2>Faça seu cadastro</h2>
                <FormInput
                    name='fullName'
                    placeholder='Nome completo'
                />
                <FormInput
                    name='email'
                    placeholder='Email'
                />
                <FormInput
                    name='password'
                    placeholder='Senha'
                    isPassword
                />
                <FormInput
                    name='passwordConfirmation'
                    placeholder='Confirmação de senha'
                    isPassword
                />
                <button
                    type='submit'
                >
                    Cadastrar
                </button>
            </Form>
        </Modal>
    )
}