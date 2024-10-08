import { MusicContainer } from "../../styled /MusicCard";
import { Paragraph } from "../../styled /Text";
import Fav from "../../assets/star (2).png";
import FavTwo from "../../assets/star (3).png";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import Banner from "../../assets/banner.png";
import { useDispatch, useSelector } from "react-redux";
import { changeMusic } from "../../features/musicPlayerSlice";
import Play from "../../assets/play-button.png";
import { makeFavourite } from "../../features/makeFavouriteSlice";
import Remove from "../../assets/delete.png";
import { Page } from "../home/Musics";
import { RootState } from "../../app/store";
import Playing from "../../assets/sound.png";
import Update from "../../assets/pen.png";
import { Link } from "react-router-dom";

function Music({
  banner,
  title,
  album,
  artist,
  audio,
  _id,
  page,
  createdBy,
}: Page) {
  const dispatch = useDispatch();
  const player = useSelector((state: RootState) => state.player);
  const songList = useSelector((state: RootState) => state.favouriteList);
  const userId = useSelector((state: RootState) => state.auth.userId);

  const allId: string[] = songList.songs.map((item) => item._id);

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
        {createdBy == userId ? (
          <Link state={{ id: _id }} to="/dashboard/update">
            <img
              src={Update}
              alt=""
              width="20px"
              height="20px"
              title="update song"
              className="pointer"
            />
          </Link>
        ) : null}
        {audio &&
          audio != "" &&
          (player._id == _id ? (
            <img
              src={Playing}
              width="34px"
              height="40px"
              alt="playing"
              title="play music"
              className="pointer"
            />
          ) : (
            <img
              src={Play}
              width="24px"
              height="24px"
              alt="play sign"
              title="play music"
              onClick={() =>
                audio &&
                dispatch(
                  changeMusic({
                    music: audio,
                    banner: banner || "",
                    _id: _id || "",
                  })
                )
              }
              className="pointer"
            />
          ))}
        {page == "songs" ? (
          <img
            src={allId.includes(_id) ? FavTwo : Fav}
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
