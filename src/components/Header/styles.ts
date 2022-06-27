import styled from "styled-components";

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--gray-800);
  background: var(--gray-900);
  position: sticky;
  top: 0;
  z-index: var(--zindex-menu);
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  img{
    max-width: 100px;
  }

  section{
    margin-left: auto;

    @media(max-width: 720px){
      display: none;
    }

    button {
      margin-left: 1rem;
      background: transparent;
      border: 1px solid var(--gray-300);
      border-radius: .5rem;
      padding: .5rem 1rem;
      font-size: 1rem;
      color: var(--gray-300);

      transition: color 0.25s, background 0.25s;

      &:hover{
        background: var(--gray-300);
        color: var(--gray-900);
        filter: brightness(1.2);
      }
    }
  }
`;