import styled, { css } from 'styled-components';

interface IRadioBoxProps {
  isActive: boolean;
}

export const Container = styled.div`
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 1280px) {
    padding: 2rem;
  }
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  >img{
    border-radius: 100%;
    border: 2px solid var(--gray-300);
    cursor: pointer;
    width: 16rem;
    aspect-ratio: auto 256 / 256;
    height: 16rem;
    object-fit: cover;
  }

  >h1{
    font-size: 1.6rem;
    color: var(--white);
    margin: .25rem 0 0rem;
  }

  >h2{
    font-size: 1rem;
    color: var(--gray-300);
    margin: .25rem 0 1rem;
  }

  >svg{
    position: absolute;
    top: 0;
    right:0;
    color: var(--gray-300);
    cursor: pointer;
  }

  @media (max-width: 720px) {
    img{
      width: 10rem;
      height: 10rem;
    }
  }
`;

export const DisplayTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  border-bottom: 1px solid var(--gray-300);
  width: 100%;
  padding: 1rem 0;
`;

export const RadioBox = styled.button<IRadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.2s;

  &:hover{
    filter: brightness(1.2);
  }

  p{
    color: var(--gray-300);
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    margin: 0;
  }

  ${({ isActive }) => isActive && css`
    background: var(--gray-300);

    p{
      color: var(--gray-900)
    }
  `}
`;