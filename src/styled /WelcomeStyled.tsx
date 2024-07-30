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

const Container = styled.div<{
  $gap?: string;
  $paddInline?: string;
  $padding?: string;
  $height?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || "20px"};
  padding: ${(props) => props.$padding || "0"};
  height: ${(props) => props.$height || "100%"};
  overflow-y: ${(props) => (props.$height ? "scroll" : "auto")};
  @media (max-width: 900px) {
    /* width: 100vw !important; */
  }
`;

const MainContainer = styled(Container)`
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: ${(props) => props.$paddInline || "0"};
  box-sizing: border-box;
`;

const HorizontalContainer = styled.div<{
  $gap?: string;
  $justContent?: string;
  $padding?: string;
  $width?: string;
  $flexWrap?: string;
}>`
  display: flex;
  gap: ${(props) => props.$gap || "20px"};
  justify-content: ${(props) => props.$justContent || "space-between"};
  width: ${(props) => props.$width || "100%"};
  align-items: center;
  padding: ${(props) => props.$padding || "0"};
  flex-wrap: ${(props) => props.$flexWrap || "no-wrap"};
`;

const DisplayGrid = styled.div<{
  $gap?: string;
  $justContent?: string;
  $padding?: string;
  $width?: string;
}>`
  display: flex;
  gap: 27px;
  flex-wrap: wrap;
  width: ${(props) => props.$width || "100%"};
  padding-bottom: 400px !important;
  max-height: 50vh;
  /* overflow-y: scroll; */
  @media (max-width: 900px) {
    width: 100% !important;
  }
`;

export {
  WelcomeContainer,
  Div,
  Container,
  HorizontalContainer,
  MainContainer,
  DisplayGrid,
};
