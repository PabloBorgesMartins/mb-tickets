import { useRef } from 'react';
import {
    Form,
} from './styles';
import Modal from 'react-modal';
import FormInput from '../FormInput';
import { FiX } from 'react-icons/fi';
import { useModal } from '../../hooks/modal';
import { SubmitHandler, FormHandles } from '@unform/core';
import * as Yup from 'yup';

Modal.setAppElement('#root');

export function SignInModal() {

    const { isModalSignInOpen, setIsModalSignInOpen } = useModal();
    const formRef = useRef<FormHandles>(null);
    const handleSubmit: SubmitHandler<FormData> = async data => {
        console.log(data);
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email()
                    .required(),
                password: Yup.string()
                    .min(6)
                    .required(),
            });
            await schema.validate(data, {
                abortEarly: false,
            });

        } catch (err) {
            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
                err.inner.forEach(error => {
                    // validationErrors[error.path] = error.message;
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
                />
                <button
                    type='submit'
                >
                    Fazer login
                </button>
            </Form>
        </Modal>
    )
}