import { MainDiv } from "../../styled /Layout";
import { Paragraph } from "../../styled /Text";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import Total from "../card/Total";

function Statistics() {
  return (
    <MainDiv>
      <HorizontalContainer $flexWrap="wrap">
        <Total title="Total Song" amount={33} />
      </HorizontalContainer>
      <Paragraph $fontWeight={200} $align="start">
        Genre statstics
      </Paragraph>
      <table style={{}}>
        <thead>
          <td>Genre</td>
          <td>count</td>
        </thead>
        <tbody>
          <td>rock</td>
          <td>5</td>
        </tbody>
      </table>
      <Paragraph $fontWeight={200} $align="start">
        Artist based stats
      </Paragraph>
      <table style={{}}>
        <thead>
          <td>artist</td>
          <td>album</td>
          <td>count</td>
        </thead>
        <tbody>
          <td>halsey</td>
          <td>whlt</td>
          <td>5</td>
        </tbody>
      </table>
      <Paragraph $fontWeight={200} $align="start">
        Albums stats
      </Paragraph>
      <table style={{}}>
        <thead>
          <td>album</td>
          <td>count</td>
        </thead>
        <tbody>
          <td>title</td>
          <td>12</td>
        </tbody>
      </table>
      <Paragraph $fontWeight={200} $align="start">
        Genre stats
      </Paragraph>
      <table style={{}}>
        <thead>
          <td>album</td>
          <td>count</td>
        </thead>
        <tbody>
          <td>title</td>
          <td>12</td>
        </tbody>
      </table>
      <Paragraph $fontWeight={200} $align="start">
        Artist stats
      </Paragraph>
      <table style={{}}>
        <thead>
          <td>album</td>
          <td>count</td>
        </thead>
        <tbody>
          <td>title</td>
          <td>12</td>
        </tbody>
      </table>
    </MainDiv>
  );
}

export default Statistics;
