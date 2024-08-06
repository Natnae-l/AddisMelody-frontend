import UserProfile from "./UserProfile";
import Notification from "./Notification";
import MusicPlayer from "./MusicPlayer";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import imgBanner from "../../assets/digital-art-portrait-person-listening-music-headphones.jpg";
import { MainDiv } from "../../styled /Layout";

function TopLevel() {
  const { page: currentPage } = useSelector((state: RootState) => state.page);

  return (
    <div
      className="not"
      style={{
        position: "fixed",
        borderRadius: "1rem",
        overflowY: "scroll",
        right: "20px",
        marginBlockStart: "10px",
        boxShadow: currentPage == "" ? "0 0 0 0" : "0px 0px 7px 1px #c4c0c0",
        height: currentPage == "" ? "fit-content" : "71vh",
        padding: currentPage == "" ? "0 0 0 0" : "0 .6%",
      }}
    >
      <MainDiv
        $radius="1.7rem"
        $max="700px"
        $height={currentPage == "" ? "fit-content" : "71vh"}
        $margin="10px 0 0 0"
        $zIndex={1000}
      >
        {" "}
        {currentPage == "" ? (
          <img src={imgBanner} width="300px" height="510px" alt="" />
        ) : currentPage == "notification" ? (
          <Notification />
        ) : (
          <UserProfile />
        )}{" "}
      </MainDiv>

      <MusicPlayer />
    </div>
  );
}

export default TopLevel;
