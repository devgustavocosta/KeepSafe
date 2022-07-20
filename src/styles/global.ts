import {createGlobalStyle} from 'styled-components'

const globalStyler = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        background-color: #F3AC85;
        font-color: #fff;
        font-family: 'Poppins', sans-serif;
    }

    button {
        background-color: transparent;
        font-family: 'Poppins', sans-serif;
        border: none;
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`;

export default globalStyler;