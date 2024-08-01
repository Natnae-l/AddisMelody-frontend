import { MusicContainer } from "../../styled /MusicCard";
import { Paragraph } from "../../styled /Text";
import Plus from "../../assets/plus.png";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import Banner from "../../assets/banner.png";
import { Song } from "../../features/getSongSlice";
import { useDispatch } from "react-redux";
import { changeMusic } from "../../features/musicPlayerSlice";

function Music({ banner, title, album, artist, audio }: Song) {
  const dispatch = useDispatch();
  return (
    <MusicContainer
      className="pointer box-hover"
      onClick={() =>
        audio && dispatch(changeMusic({ music: audio, banner: banner || "" }))
      }
    >
      <HorizontalContainer $width="fit-content">
        <img src={banner || Banner} alt="" width="32px" height="32px" />
        <Paragraph $fontWeight={600} $fontSize="1rem">
          {title}
        </Paragraph>
      </HorizontalContainer>
      <Paragraph $fontWeight={300}>{artist}</Paragraph>
      <Paragraph $fontWeight={200}>{album}</Paragraph>
      <img
        src={Plus}
        width="14px"
        height="14px"
        alt="plus sign"
        title="add to favourite"
      />
    </MusicContainer>
  );
}

export default Music;
