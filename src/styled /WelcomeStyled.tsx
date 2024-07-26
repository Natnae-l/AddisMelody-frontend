import styled from "styled-components";

const WelcomeContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 100vh;
  overflow-y: hidden;
`;

const Div = styled.div<{
  $gap?: string;
  $backgroundColor?: string;
  $breakPoint?: number;
}>`
  display: flex;
  padding: 10px 5%;
  flex-direction: column;
  gap: ${(props) => props.$gap || "10px"};
  flex: 1;
  background-color: ${(props) => props.$backgroundColor || "#6e6b6953"};
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.$breakPoint || 0}px) {
    display: none;
  }
`;

export { WelcomeContainer, Div };
