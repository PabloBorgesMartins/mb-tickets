import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 0;

  h1{
    font-size: 1.6rem;
    color: var(--white);
  }

  @media(max-width: 1280px){
    padding: 2rem;
  }
`;

export const Form = styled(Unform)`

    h2{
      text-align: center;
      color: var(--white);
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }

    >div{
      & + div{
        margin: 2rem 0;
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
        font-weight: 600;
        margin-top: 2rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }
    }
`

export const Divider = styled.section`
  height: 1px;
  background: var(--white);
  margin: 4rem 20% .5rem;
`;