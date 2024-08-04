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
    overflow: hidden;
  }
  table, th, td {
  border: 1px solid;
  padding: 5px;
}
.notification-container {
  padding: 0;
  display: flex;
  align-items: center;
}

.notification-text {
  color: #59438a;
  position: relative;
  top: -8px;
  right: -90%;
  z-index: 400;
  font-weight: 600;
}

.notification-icon {
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-left: 10px; /* Adjust as necessary for spacing */
}

  .pointer:hover {
    cursor: pointer;
  }
  .hover:hover {
    text-decoration: underline !important;
  }
  .box-hover:hover {
    box-shadow: 1px 1px 2px 1px #e2e1e1;
    border-radius: 3px;
  }
`;

export default GlobalStyle;
