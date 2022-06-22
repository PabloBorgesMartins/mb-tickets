import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    /* background: red; */
    min-height: 100vh;
    max-width: 1120px;
    margin: 0 auto;

    section{
        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
            font-size: 2rem;
            color: var(--white);
            margin-bottom: 3rem;
        }

        img{
            max-width: 400px;
        }
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding-left: 3rem;
    border-left: 1px solid var(--white);
`;