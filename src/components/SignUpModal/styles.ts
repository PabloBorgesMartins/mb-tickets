import styled from "styled-components";
import { Form as Unform } from '@unform/web'

export const Form = styled(Unform)`
    h2{
        color: var(--white);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    div{
        & + div{
            margin: 1rem 0;
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green-300);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }
    }
`

