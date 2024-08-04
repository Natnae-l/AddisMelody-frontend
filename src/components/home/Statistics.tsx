import { useSelector } from "react-redux";
import { MainDiv } from "../../styled /Layout";
import { Paragraph } from "../../styled /Text";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import Total from "../card/Total";
import styled from "styled-components";
import { RootState } from "../../app/store";
import { ThreeDot } from "react-loading-indicators";

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
  const statisticsState = useSelector((state: RootState) => state.statistics);

  console.log(statisticsState);

  return statisticsState.isLoading ? (
    <MainDiv $flex={2.2}>
      <div
        style={{
          marginBlock: "200px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ThreeDot />
      </div>
    </MainDiv>
  ) : statisticsState.error && statisticsState.error != "" ? (
    <MainDiv $flex={2.2}>
      <div
        style={{
          marginBlock: "200px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paragraph>{statisticsState.error}</Paragraph>
      </div>
    </MainDiv>
  ) : (
    <MainDiv $flex={2.2}>
      <h2>My song Stats</h2>
      <HorizontalContainer $flexWrap="wrap">
        <Total title="Total Song" amount={statisticsState.totalSongs} />
        <Total title="Total Albums" amount={statisticsState.totalAlbums} />
        <Total title="Total Artists" amount={statisticsState.totalArtists} />
        <Total title="Total Genres" amount={statisticsState.totalGenres} />
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
          {statisticsState.genreSongCounts.map((item) => (
            <>
              <tr>
                <td>{item._id}</td>
                <td>{item.count}</td>
              </tr>
            </>
          ))}
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
          {statisticsState.artistAlbumCounts.map((item) => (
            <tr>
              <td>{item._id.artist}</td>
              <td>{item._id.album}</td>
              <td>{item.count}</td>
            </tr>
          ))}
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
          {statisticsState.albumSongCounts.map((item) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.count}</td>
            </tr>
          ))}
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
          {statisticsState.artistSongCounts.map((item) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </MainDiv>
  );
}

export default Statistics;
