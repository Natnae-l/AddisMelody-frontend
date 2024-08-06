import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #423e3ede;
`;

const StyledNav = styled.nav<{ $padding?: string; $noneWidth?: string }>`
  flex-grow: 0.115;
  flex-shrink: 0;
  color: #ece9e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.$padding || "4rem 10px"};
  @media (max-width: ${(props) => props.$noneWidth || "900px"}) {
    display: none !important;
  }
`;

const Ul = styled.ul<{ $gap?: string }>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: ${(props) => props.$gap || "21px"};
`;

const Li = styled.li<{ $color?: string; $fontSize?: string }>`
  color: ${(props) => props.$color || "#c0bfbf"};
  list-style: none;
  font-size: ${(props) => props.$fontSize || "1.2rem"};
  text-decoration: none !important;
  &:hover {
    cursor: pointer;
  }
`;

const H2 = styled.h2<{ $color?: string; $fontSize?: string }>`
  color: ${(props) => props.$color || "#efeeee"};
  list-style: none;
  font-size: ${(props) => props.$fontSize || "1.9rem"};
  text-decoration: none !important;
  padding-block: 1rem;
  font-weight: 500;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  flex: 0.9;
  border-radius: 1.6rem 0 0 0rem;
  @media (max-width: 700px) {
    flex: 1;
    border-radius: 0;
    height: 100;
  }
`;

const MainDiv = styled.div<{
  $gap?: string;
  $flex?: number;
  $radius?: string;
  $max?: string;
  $fill?: string;
  $flexWrap?: string;
  $position?: string;
  $shadow?: string;
  $margin?: string;
  $padding?: string;
  $height?: string;
  $zIndex?: number;
  $scroll?: boolean;
}>`
  /* position: ; */
  z-index: ${(props) => props.$zIndex || 0};
  position: ${(props) => props.$position || "relative"};
  padding: ${(props) => props.$padding || "relative"};
  margin: ${(props) => props.$margin || "relative"};
  flex-wrap: ${(props) => props.$flexWrap || "no-wrap"};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || "1rem"};
  flex: ${(props) => props.$flex || "1"};
  box-shadow: ${(props) => props.$shadow || "0"};
  border-radius: ${(props) => props.$radius || "0"};
  /* overflow: ${(props) => (props.$scroll ? "scroll" : "auto")}; */
  height: ${(props) => props.$height || "100%"};

  @media (max-width: ${(props) => props.$max || "0"}) {
    display: none;
  }
  @media (max-width: ${(props) => props.$fill || "0"}) {
    width: 100vw !important;
  }
`;

export { Layout, StyledNav, Ul, Li, H2, Main, MainDiv };
