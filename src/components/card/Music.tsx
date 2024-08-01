import { MusicContainer } from "../../styled /MusicCard";
import { Paragraph } from "../../styled /Text";
import Plus from "../../assets/plus.png";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import Banner from "../../assets/banner.png";
import { Song } from "../../features/getSongSlice";
import { useDispatch } from "react-redux";
import { changeMusic } from "../../features/musicPlayerSlice";
import Play from "../../assets/play-button.png";
import { makeFavourite } from "../../features/makeFavouriteSlice";

function Music({ banner, title, album, artist, audio, _id }: Song) {
  const dispatch = useDispatch();
  return (
    <MusicContainer className=" box-hover">
      <HorizontalContainer $width="fit-content">
        <img src={banner || Banner} alt="" width="32px" height="32px" />
        <Paragraph $fontWeight={600} $fontSize="1rem">
          {title}
        </Paragraph>
      </HorizontalContainer>
      <Paragraph $fontWeight={300}>{artist}</Paragraph>
      <Paragraph $fontWeight={200}>{album}</Paragraph>
      <HorizontalContainer $width="fit-content">
        {" "}
        {audio && audio != "" && (
          <img
            src={Play}
            width="24px"
            height="24px"
            alt="play sign"
            title="play music"
            onClick={() =>
              audio &&
              dispatch(changeMusic({ music: audio, banner: banner || "" }))
            }
            className="pointer"
          />
        )}
        <img
          src={Plus}
          width="14px"
          height="14px"
          alt="plus sign"
          title="add to favourite"
          className="pointer"
          onClick={() => {
            dispatch(makeFavourite({ id: _id }));
          }}
        />
      </HorizontalContainer>
    </MusicContainer>
  );
}

export default Music;
