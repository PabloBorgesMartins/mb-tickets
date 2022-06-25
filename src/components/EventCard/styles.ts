import styled from "styled-components";


export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid var(--gray-300);
  /* border-top: 1px solid var(--gray-300); */
  padding: 1rem 0rem;


  img{
    border: 1px solid var(--gray-300);
    width: 156px;
    aspect-ratio: auto 156 / 156;
    height: 156px;
    object-fit: cover;
  }

  @media(max-width: 720px){
    flex-direction: column;

    img{
      margin-bottom: 1rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 2rem;
  /* background: red; */

  >h1{
    color: var(--gray-100);
    margin-bottom: 1rem;
  }

  >p{
    color: var(--gray-300);
    font-size: .8rem;
    margin-bottom: 1rem;
  }

  >span{
    color: var(--gray-300);
    text-align: right;
    width: 100%;
    display: block;
    margin-bottom: 1rem;
  }

`;

export const Footer = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  align-items: center;

  p{
    color: var(--gray-300);
  }

  button{
    border: 1px solid var(--gray-300);
    border-radius: .5rem;
    background: transparent;
    height: 3rem;
    padding: 0 1rem;
    width: min-content;

    color: var(--gray-300);
    font-weight: bold;
    font-size: 1rem;

    transition: color 0.25s;
    transition: background 0.25s;
    &:hover{
      background: var(--green-300);
      color: var(--white);
    }
  }
`;