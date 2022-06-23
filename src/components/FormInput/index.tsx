import { useEffect, useRef } from 'react';
import {
    Container,
    ErroredText
} from './styles';
import { useField } from '@unform/core';

interface Props {
    name: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props

export default function Input({ name, ...rest }: InputProps) {
    
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);
    
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
        <Container>
            <input
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                {...rest}
            />
            <ErroredText>{error}</ErroredText>
        </Container>
    )
}