const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: linear-gradient(to bottom, #FF7F00, #FFBA00) no-repeat;
        background-size: 200vw 200vh;
        overflow-x: hidden;
        width: 100vw;
        height: 100vh;
    }
    html{
        font-family: 'Roboto', sans-serif;
    }
    input{
        outline: none;
        border: none;
    }
    h1{
        color: #FFFFFF;
    }
`