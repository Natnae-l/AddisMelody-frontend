import { MusicContainer } from "../../styled /MusicCard";
import { Paragraph } from "../../styled /Text";
import Plus from "../../assets/plus.png";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import Banner from "../../assets/banner.png";

function Music() {
  return (
    <MusicContainer className="pointer">
      <HorizontalContainer $width="fit-content">
        <img src={Banner} alt="" width="32px" height="32px" />
        <Paragraph $fontWeight={600} $fontSize="1rem">
          what helsy
        </Paragraph>
      </HorizontalContainer>
      <Paragraph $fontWeight={300}>halsey</Paragraph>
      <Paragraph $fontWeight={200}>03:30</Paragraph>
      <img src={Plus} width="14px" height="14px" alt="" />
    </MusicContainer>
  );
}

export default Music;
