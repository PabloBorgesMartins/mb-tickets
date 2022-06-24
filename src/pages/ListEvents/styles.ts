import styled from 'styled-components';


export const Container = styled.div`
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 0;

  section{
    & + section{
      margin-top: 1rem;
    }
  }

  @media (max-width: 1280px) {
    padding: 2rem;
  }
`;