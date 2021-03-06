import { useRef, useState, useEffect } from 'react';
import { Container } from './styles';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

import { useField } from '@unform/core';

import 'react-datepicker/dist/react-datepicker.css';

interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
    name: string;
}

export default function DatePicker({ name, ...rest }: Props) {
    const datepickerRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    const [date, setDate] = useState(defaultValue || null);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: datepickerRef.current,
            path: 'props.selected',
            clearValue: (ref: any) => {
                ref.clear();
            },
        });
    }, [fieldName, registerField]);

    return (
        <Container>
            <ReactDatePicker
                ref={datepickerRef}
                selected={date}
                onChange={setDate}
                {...rest}
            />
        </Container>
    );
};