import { Paragraph, RoundImg } from "../../styled /Text";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import EDM from "../../assets/charismatic.webp";
import HipHop from "../../assets/images (1).png";
import Rock from "../../assets/images (2).png";
import RandB from "../../assets/images.png";
import Pop from "../../assets/images (1).jpeg";
import { MainDiv } from "../../styled /Layout";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../../features/getSongSlice";

function Genre() {
  const genre = [
    { title: "Pop", logo: Pop, genre: "Pop" },
    { title: "Hip Hop", logo: HipHop, genre: "Hip-Hop/Rap" },
    { title: "Rock", logo: Rock, genre: "Rock" },
    { title: "EDM", logo: EDM, genre: "Electronic Dance Music (EDM)" },
    { title: "R&B", logo: RandB, genre: "R&B (Rhythm and Blues)" },
  ];

  const dispatch = useDispatch();

  const handleClick = (genre: string) => {
    dispatch(fetchSongs({ genre: genre != "" ? genre : undefined }));
  };

  const allGenres = genre.map((gen) => (
    <div
      className="pointer"
      style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      onClick={() => handleClick(gen.genre)}
    >
      <RoundImg src={gen.logo} />
      <Paragraph $fontWeight={400} $fontSize="1rem">
        {gen.title}
      </Paragraph>
    </div>
  ));
  return (
    <MainDiv>
      {" "}
      <HorizontalContainer $padding="10px 20px">
        <Paragraph $fontSize="1.1rem" $fontWeight={500} $color="#3b3a3a">
          Genres
        </Paragraph>
        <Paragraph
          $fontSize="1.1rem"
          $fontWeight={500}
          $color="#3b3a3a"
          className="hover pointer"
          onClick={() => handleClick("")}
        >
          See all
        </Paragraph>
      </HorizontalContainer>
      <HorizontalContainer $justContent="space-around">
        {allGenres}
      </HorizontalContainer>
    </MainDiv>
  );
}

export default Genre;
