import styled from "styled-components";

const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70vh;
  overflow-y: hidden;
  @media (max-width: "700px") {
    height: 100vh !important;
  }
`;

const Div = styled.div<{
  $gap?: string;
  $backgroundColor?: string;
  $breakPoint?: number;
}>`
  display: flex;
  padding: 20px 5%;
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

const Container = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || "20px"};
`;

const MainContainer = styled(Container)`
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const HorizontalContainer = styled.div<{
  $gap?: string;
  $justContent?: string;
}>`
  display: flex;
  gap: ${(props) => props.$gap || "20px"};
  justify-content: ${(props) => props.$justContent || "space-between"};
  width: 100%;
  align-items: center;
`;

export { WelcomeContainer, Div, Container, HorizontalContainer, MainContainer };
