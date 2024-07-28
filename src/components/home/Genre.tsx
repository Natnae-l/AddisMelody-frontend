import { Paragraph, RoundImg } from "../../styled /Text";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import EDM from "../../assets/charismatic.webp";
import HipHop from "../../assets/images (1).png";
import Rock from "../../assets/images (2).png";
import RandB from "../../assets/images.png";
import Pop from "../../assets/images (1).jpeg";
import { MainDiv } from "../../styled /Layout";

function Genre() {
  const genre = [
    { genre: "Pop", logo: Pop },
    { genre: "Hip Hop", logo: HipHop },
    { genre: "Rock", logo: Rock },
    { genre: "EDM", logo: EDM },
    { genre: "R&B", logo: RandB },
  ];

  const allGenres = genre.map((gen) => (
    <div
      className="pointer"
      style={{ display: "flex", flexDirection: "column", gap: "12px" }}
    >
      <RoundImg src={gen.logo} />
      <Paragraph $fontWeight={400} $fontSize="1rem">
        {gen.genre}
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
