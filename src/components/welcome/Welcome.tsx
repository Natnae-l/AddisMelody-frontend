import { Paragraph } from "../../styled /Text";
import { Div, WelcomeContainer } from "../../styled /WelcomeStyled";
import musicImg from "../../assets/music (1).png";
// import musicImg from "../../assets/musical-note.png";
import { Outlet } from "react-router-dom";

function Welcome() {
  return (
    <WelcomeContainer>
      <Div $backgroundColor="#6e6b69c1" $breakPoint={700}>
        <img src={musicImg} width="120px" />
        <Paragraph $fontWeight={300} $fontSize="1.6rem">
          Find the right sounds for your next hit
        </Paragraph>
        <Paragraph $fontWeight={200}>
          Dive into our expertly made music samples, covering all music styles.
          Get creative with endless music choices
        </Paragraph>
      </Div>
      <Outlet />
    </WelcomeContainer>
  );
}

export default Welcome;
