import { useSelector } from "react-redux";
import { MainDiv } from "../../styled /Layout";
import { Paragraph } from "../../styled /Text";
import { DisplayGrid, HorizontalContainer } from "../../styled /WelcomeStyled";
import Music from "../card/Music";
import { RootState } from "../../app/store";
import { ThreeDot } from "react-loading-indicators";
import { Song } from "../../features/getSongSlice";

export interface Page extends Song {
  page: "songs" | "favourite";
}

function Musics() {
  const musicState = useSelector((state: RootState) => state.songList);
  const { songs, isLoading, error } = musicState;

  const songRender = songs.map((song) => (
    <Music
      title={song.title}
      banner={song.banner}
      album={song.album}
      artist={song.artist}
      audio={song.audio || ""}
      genre={song.genre}
      _id={song._id}
      createdBy={song.createdBy}
      page="songs"
    />
  ));
  return (
    <MainDiv>
      {" "}
      <HorizontalContainer $padding="10px 20px">
        <Paragraph $fontSize="1.1rem" $fontWeight={500} $color="#3b3a3a">
          Musics
        </Paragraph>
      </HorizontalContainer>
      <DisplayGrid
        $justContent={isLoading ? "center !important" : "flex-start"}
        $alignItems={isLoading ? "center !important" : "flex-start"}
      >
        {isLoading ? (
          <div style={{ marginBlock: "100px" }}>
            <ThreeDot />
          </div>
        ) : error != "" ? (
          <div style={{ marginBlock: "100px", paddingInlineStart: "50px" }}>
            <Paragraph $fontSize="2rem" $fontWeight={400} $align="center">
              {error}
            </Paragraph>
          </div>
        ) : !songRender.length ? (
          <div style={{ marginBlock: "100px", paddingInlineStart: "50px" }}>
            <Paragraph
              $fontSize="2rem"
              $fontWeight={400}
              $align="center !important"
              $color="#c9b7b7"
            >
              No songs to explore
            </Paragraph>
          </div>
        ) : (
          songRender
        )}
      </DisplayGrid>
    </MainDiv>
  );
}

export default Musics;
