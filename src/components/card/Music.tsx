import { MusicContainer } from "../../styled /MusicCard";
import { Paragraph } from "../../styled /Text";
import Fav from "../../assets/star (2).png";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import Banner from "../../assets/banner.png";
import { useDispatch } from "react-redux";
import { changeMusic } from "../../features/musicPlayerSlice";
import Play from "../../assets/play-button.png";
import { makeFavourite } from "../../features/makeFavouriteSlice";
import Remove from "../../assets/delete.png";
import { Page } from "../home/Musics";

function Music({ banner, title, album, artist, audio, _id, page }: Page) {
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
        {page == "songs" ? (
          <img
            src={Fav}
            width="26px"
            height="26px"
            alt="plus sign"
            title="add to favourite"
            className="pointer"
            onClick={() => {
              dispatch(makeFavourite({ id: _id }));
            }}
          />
        ) : (
          <img
            src={Remove}
            width="18px"
            height="18px"
            alt="plus sign"
            title="remove songs"
            className="pointer"
            onClick={() => {
              dispatch(makeFavourite({ id: _id }));
            }}
          />
        )}
      </HorizontalContainer>
    </MusicContainer>
  );
}

export default Music;
