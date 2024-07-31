import UserProfile from "./UserProfile";
import Notification from "./Notification";
import MusicPlayer from "./MusicPlayer";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import imgBanner from "../../assets/digital-art-portrait-person-listening-music-headphones.jpg";

function TopLevel() {
  const { page: currentPage } = useSelector((state: RootState) => state.page);

  return (
    <div
      style={{
        position: "fixed",
        borderRadius: "1rem",
        overflow: "hidden",
      }}
    >
      {currentPage == "" ? (
        <img src={imgBanner} width="300px" height="510px" alt="" />
      ) : currentPage == "notification" ? (
        <Notification />
      ) : (
        <UserProfile />
      )}
      <MusicPlayer />
    </div>
  );
}

export default TopLevel;
