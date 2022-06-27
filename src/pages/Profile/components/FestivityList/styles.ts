import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Ticket = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--gray-300);
  padding: 1rem 0rem;

  >h1{
    color: var(--gray-100);
  }

  >p{
    color: var(--gray-300);
    font-size: .8rem;
  }
`;