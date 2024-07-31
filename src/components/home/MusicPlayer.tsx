import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Banner from "../../assets/images.jpeg";

function MusicPlayer() {
  const music = useSelector((state: RootState) => state.player);

  return (
    <div
      style={{
        backgroundColor: "#898484",
        height: "100px",
        display: "flex",
        borderRadius: "10px",
        overflow: "hidden",
        fontFamily: "cambria",
        position: "fixed",
        bottom: "10px",
        zIndex: 100,
      }}
    >
      <img src={music.banner || Banner} width="100px" height="100px" />
      <AudioPlayer
        src={
          music.music ||
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        }
        style={{
          backgroundColor: "black !important",
          borderColor: "transparent",
          boxShadow: "0 0 0 0 transparent",
        }}
        onPlay={(e) => console.log("onPlay" || e)}
      />
    </div>
  );
}

export default MusicPlayer;
