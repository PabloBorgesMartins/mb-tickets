import { useRef, useEffect } from 'react';
import { Container } from './styles';
import ReactSelect, {
    OptionProps,
    Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';

interface Props extends SelectProps<SelectProps> {
    name: string;
}

export default function Select({ name, ...rest }: Props) {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            getValue: (ref: any) => {
                if (rest.isMulti) {
                    if (!ref.state.value) {
                        return [];
                    }
                    return ref.state.value.map((option: any) => option.type);
                }
                if (!ref.state.value) {
                    return '';
                }
                return ref.state.value.value;
            },
        });
    }, [fieldName, registerField, rest.isMulti]);

    return (
        <Container>
            <ReactSelect
                defaultValue={defaultValue}
                ref={selectRef}
                classNamePrefix="react-select"
                {...rest}
            />
        </Container>
    );
};
