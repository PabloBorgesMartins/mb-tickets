import { useEffect, useRef, useState } from 'react';
import {
    Container,
    ErroredText
} from './styles';
import { useField } from '@unform/core';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface Props {
    name: string;
    isPassword?: boolean;
}

type InputProps = JSX.IntrinsicElements['input'] & Props

export default function Input({ name, isPassword, ...rest }: InputProps) {

    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);
    const [isSecure, setIsSecure] = useState(true);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField]);

    return (
        <div>
            <Container>
                <input
                    id={fieldName}
                    ref={inputRef}
                    defaultValue={defaultValue}
                    type={isSecure && isPassword ? "password" : "text"}
                    {...rest}
                />
                {
                    isPassword && (
                        isSecure ? (
                            <FaEye size={24} onClick={() => setIsSecure(!isSecure)} />
                        ) : (
                            <FaEyeSlash size={24} onClick={() => setIsSecure(!isSecure)} />
                        )
                    )
                }
            </Container>
            <ErroredText>{error}</ErroredText>
        </div>
    )
}