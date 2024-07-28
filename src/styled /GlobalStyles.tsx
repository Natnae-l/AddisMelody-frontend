import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0 ;
    font-family: "Poppins", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-sizing: border-box;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 100vh;
    background-color: #eeeeee;
  }
  .pointer:hover {
    cursor: pointer;
  }
  .hover:hover {
    text-decoration: underline !important;
  }
`;

export default GlobalStyle;
