import { MainDiv } from "../../styled /Layout";
import { Paragraph } from "../../styled /Text";
import { DisplayGrid } from "../../styled /WelcomeStyled";
import Music from "../card/Music";

function Favourite() {
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
      <DisplayGrid $padding="0px 0">
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
        <Music />
        <Music />
        <Music />
      </DisplayGrid>
    </MainDiv>
  );
}

export default Favourite;
