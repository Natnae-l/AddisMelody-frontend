import UserProfile from "./UserProfile";
import Notification from "./Notification";
import MusicPlayer from "./MusicPlayer";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function TopLevel() {
  const { page: currentPage } = useSelector((state: RootState) => state.page);

  return (
    <div
      style={{
        position: "fixed",
      }}
    >
      {currentPage == "notification" ? <Notification /> : <UserProfile />}
      <MusicPlayer />
    </div>
  );
}

export default TopLevel;
