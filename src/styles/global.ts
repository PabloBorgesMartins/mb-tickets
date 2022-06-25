import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --white: #ffffff;
        --gray-100: #e1e1e6;
        --gray-300: #a8a8b3;
        --gray-800: #29292e;
        --gray-850: #1f2729;
        --gray-900: #121214;
        --red-500: #E52E40;
        --green-300: #33CC95;
        --cyan-500: #61dafb;
        --yellow-500: #eba417;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--gray-900);
        -webkit-font-smoothing: antialised;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    ::-webkit-scrollbar-track {
        background-color: var(--gray-900);
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--gray-100);
        border-radius: 16px;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: var(--gray-800);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(1.2)
        }
    }
`
