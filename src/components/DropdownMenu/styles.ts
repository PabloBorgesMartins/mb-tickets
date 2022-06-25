import styled, { css } from 'styled-components';

interface MenuProps {
  isMenuOpen: boolean;
}

export const Container = styled.div<MenuProps>`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  margin-left: auto;
  position: absolute;
  top: 0;
  right: 0;

  cursor: pointer;

  transition: background .2s;

  ${({ isMenuOpen }) =>
    isMenuOpen && css`
      background: var(--gray-800);
    `}

  svg {
    color: var(--white);
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--white);
    margin: 0 1rem;
  }

  @media(max-width:720px){
    display: flex;
  }

  .menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: var(--zindex-menu);
    top: 100%;
    right: 0;
    background-color: var(--gray-800);
    width: max-content;
    padding: 1rem 0 .25rem;
    /* border: 1px solid var(--gray-100); */

    transform-origin: top;
    transition: 0.3s ease-in;

    ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          transform: rotateX(0deg);
        `
      : css`
          transform: rotateX(-90deg);
        `}
  }
`;

export const Button = styled.button`
  border: 0;
  padding: .5rem 1rem;
  margin: .5rem 0;
  background: transparent;
  width: 100%;

  :hover {
    background: var(--gray-900);
  }

  p {
    text-align: right;
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--gray-100);
  }
`;

export const Divider = styled.hr`
  height: 1px;
  margin: 1rem;
  background: var(--gray-100);
`;
