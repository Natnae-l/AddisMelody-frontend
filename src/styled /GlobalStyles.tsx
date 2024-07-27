import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0 ;
    font-family: "Poppins", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 100vh;
    background-color: #eeeeee;
  }
`;

export default GlobalStyle;
