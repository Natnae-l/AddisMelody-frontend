import styled from "styled-components";

const Paragraph = styled.p<{ $fontWeight?: number; $fontSize?: string }>`
  font-size: ${(props) => props.$fontSize || "1.4rem"};
  text-align: center;
  color: #000000;
  font-weight: ${(props) => props.$fontWeight || 100};
  max-width: 40ch;
`;

const Input = styled.input<{ $inputColor?: string }>`
  padding: 0.5em 0.8em;
  margin: 0.5em;
  color: ${(props) => props.$inputColor || "white"};
  background-color: #fcfafa;
  border: 1px solid black;
  border: none;
  border-radius: 8px;
  height: 30px;
  width: 100%;
  font-size: 1.02rem;
  align-self: flex-start;
  margin: 6px 0;
`;

const A = styled.a`
  align-self: flex-start;
  text-decoration: none !important;
  color: #3f3f3f;
  padding-block: 1rem;
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

export { Paragraph, Input, Button, A };
