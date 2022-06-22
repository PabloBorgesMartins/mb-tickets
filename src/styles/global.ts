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
`
