import styled from "styled-components";

const Paragraph = styled.p<{
  $fontWeight?: number;
  $fontSize?: string;
  $color?: string;
  $padding?: string;
  $align?: string;
}>`
  font-size: ${(props) => props.$fontSize || "1.1rem"};
  text-align: ${(props) => props.$align || "center"};
  color: ${(props) => props.$color || "black"};
  font-weight: ${(props) => props.$fontWeight || 100};
  max-width: 40ch;
  padding: ${(props) => props.$padding || "0"};
`;

const Input = styled.input<{ $inputColor?: string }>`
  padding: 0.5em 0.8em;
  margin: 0.5em;
  color: ${(props) => props.$inputColor || "white"};
  background-color: #fcfafa;
  border: none;
  border-radius: 8px;
  height: 33px;
  width: 90%;
  font-size: 0.9rem;
  align-self: flex-start;
  margin: 6px 0;
  &::placeholder {
    color: #575757;
    font-size: 0.8rem;
  }
  &:focus {
    outline: 1px solid;
    border: 1px solid transparent;
    /* outline: none; */
  }
`;

const A = styled.a`
  align-self: flex-start;
  text-decoration: none !important;
  color: #3f3f3f;
  padding-block: 1rem;
  &:hover {
    text-decoration: underline !important;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  width: 50%;
  align-self: center;
  border: none;
  padding: 15px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const RoundImg = styled.img`
  border-radius: 100%;
  max-width: 100px;
  height: 90px;
  background-color: #494a4a !important;
  box-shadow: 1px 1px 6px 1px #bbbbbb;
`;

export { Paragraph, Input, Button, A, RoundImg };
