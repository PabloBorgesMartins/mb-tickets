import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;

    @keyframes load {
        from {    
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    svg {
        animation: load 1s infinite linear;
        color: var(--white);
    }
`;
