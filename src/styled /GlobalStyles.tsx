import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0 ;
    font-family: "Poppins", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-sizing: border-box;
  }
  .not::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); */
  /* background-color: rgba(223, 225, 238, 0.492); */
  border-radius: 1rem;
  background-color: transparent;
}

.not::-webkit-scrollbar {
  width: 9.2px;
  background-color: rgba(223, 225, 238, 0.492);
}

.not::-webkit-scrollbar-thumb {
  background-color: #aba9a4;
  border: 1px solid #b3b1b1;
  border-radius: 0.5rem;
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
.one-line{
    overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1; 
        line-clamp: 1; 
        -webkit-box-orient: vertical;
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
