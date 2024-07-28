import { MainDiv } from "../../styled /Layout";
import { Paragraph } from "../../styled /Text";
import { DisplayGrid, HorizontalContainer } from "../../styled /WelcomeStyled";

import Music from "../card/Music";

function Musics() {
  return (
    <MainDiv>
      {" "}
      <HorizontalContainer $padding="10px 20px">
        <Paragraph $fontSize="1.1rem" $fontWeight={500} $color="#3b3a3a">
          Musics
        </Paragraph>
      </HorizontalContainer>
      <DisplayGrid>
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
      </DisplayGrid>
    </MainDiv>
  );
}

export default Musics;
