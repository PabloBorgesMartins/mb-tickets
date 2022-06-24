import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid var(--gray-300);

    input{
        background: transparent;
        color: var(--white);
        border: 0;
        font-size: 1rem;
        width: 100%;
        
        padding: .5rem .5rem 0;

        &:hover{
            filter: brightness(1.2);
        }
    }

    svg{
        color: white;
        margin: 0 .5rem;
        cursor: pointer;
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
