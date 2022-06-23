import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    input{
        background: transparent;
        color: var(--white);
        border: 0;
        font-size: 1rem;
        border-bottom: 1px solid var(--gray-300);
        padding: .5rem .5rem 0;

        &:hover{
            filter: brightness(1.2);
        }
    }

    span{
        font-size: 0.8rem;
        color: var(--red);
    }
`;

export const ErroredText = styled.p`
    font-size: 0.8rem;
    color: var(--red-500);
`;
