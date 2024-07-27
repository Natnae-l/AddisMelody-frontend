import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #423e3ede;
`;

const StyledNav = styled.nav<{ $padding?: string }>`
  flex-grow: 0.115;
  flex-shrink: 0;
  color: #ece9e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${(props) => props.$padding || "4rem 10px"};
  @media (max-width: 700px) {
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
  border-radius: 1.6rem 0 0 1.5rem;
  @media (max-width: 700px) {
    flex: 1;
    border-radius: 0;
  }
`;

export { Layout, StyledNav, Ul, Li, H2, Main };
