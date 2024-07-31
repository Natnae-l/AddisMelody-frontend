import { MainDiv } from "../../styled /Layout";
import { Paragraph } from "../../styled /Text";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import Total from "../card/Total";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: #f4f4f4;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
    color: #333;
    font-weight: bold;
  }

  tbody tr:nth-of-type(odd) {
    background-color: #fafafa;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }
`;

const SectionTitle = styled(Paragraph)`
  margin-top: 40px;
  font-size: 1.5rem;
  color: #333;
`;

function Statistics() {
  return (
    <MainDiv $flex={2.2}>
      <HorizontalContainer $flexWrap="wrap">
        <Total title="Total Song" amount={33} />
      </HorizontalContainer>

      <SectionTitle $fontWeight={200} $align="start">
        Genre Statistics
      </SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <th>Genre</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rock</td>
            <td>5</td>
          </tr>
        </tbody>
      </StyledTable>

      <SectionTitle $fontWeight={200} $align="start">
        Artist Based Stats
      </SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <th>Artist</th>
            <th>Album</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Halsey</td>
            <td>WHTL</td>
            <td>5</td>
          </tr>
        </tbody>
      </StyledTable>

      <SectionTitle $fontWeight={200} $align="start">
        Albums Stats
      </SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <th>Album</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title</td>
            <td>12</td>
          </tr>
        </tbody>
      </StyledTable>

      <SectionTitle $fontWeight={200} $align="start">
        Genre Stats
      </SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <th>Album</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title</td>
            <td>12</td>
          </tr>
        </tbody>
      </StyledTable>

      <SectionTitle $fontWeight={200} $align="start">
        Artist Stats
      </SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <th>Album</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title</td>
            <td>12</td>
          </tr>
        </tbody>
      </StyledTable>
    </MainDiv>
  );
}

export default Statistics;
