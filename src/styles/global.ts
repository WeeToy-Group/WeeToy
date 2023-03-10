import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    :root{
        --color-primary: #4abdac;
        --color-secundary: #fc4a1a;
        --color-grey-0: #f4f4f4;
        --font-button: 'Seymour One', sans-serif;
        --size-1: 1.688rem;
        --size-2: 1.1rem;
        --radius: 0.75rem;
    }

    body{
        font-family: 'Inter', sans-serif;
        width: 100%;
        min-height: 100vh;
  background-color: #4abdac40;

    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }


    input[type=number] {
    -moz-appearance: textfield;
    }
    
    button{
        cursor: pointer;
    }

    .modalCart{
        position: fixed;
        top: 10%;
        right: 25%;
    }

    @media(max-width: 620px){
        .modalCart{
            right: 9%;
        }
    }
`;
