import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
    }

    body{
        margin: 0; /* Remove margens padrão */
        height: 100vh; /* Define a altura para ocupar toda a tela */
        background: radial-gradient(circle, #219EBC 20%, #8ECAE6 80%);
    }
`;
