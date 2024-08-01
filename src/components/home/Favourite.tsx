import { MainDiv } from "../../styled /Layout";
import { Paragraph } from "../../styled /Text";
import { DisplayGrid } from "../../styled /WelcomeStyled";
import Music from "../card/Music";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ThreeDot } from "react-loading-indicators";

function Favourite() {
  const musicState = useSelector((state: RootState) => state.songList);
  const { songs, isLoading, error } = musicState;

  const songRender = songs.map((song) => (
    <Music
      banner={song.banner}
      title={song.title}
      album={song.album}
      artist={song.artist}
      favourite={song.favourite}
      audio={song.audio || ""}
      genre={song.genre}
    />
  ));
  return (
    <MainDiv $flex={2.2} $radius="1.7rem" $fill="700px">
      <Paragraph
        $align="start"
        $fontSize="1.2rem"
        $fontWeight={500}
        $color="#3b3a3a"
        $padding="10px 0 0px 20px"
      >
        My favourite songs
      </Paragraph>
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
              You don't have musics added
            </Paragraph>
          </div>
        ) : (
          songRender
        )}
      </DisplayGrid>
    </MainDiv>
  );
}

export default Favourite;
