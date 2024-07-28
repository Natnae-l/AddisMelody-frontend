import { MainDiv } from "../../styled /Layout";
import Genre from "./Genre";
import Musics from "./Musics";

function Browse() {
  return (
    <MainDiv $flex={2.2} $radius="1.7rem" $fill="700px">
      <Genre />
      <Musics />
    </MainDiv>
  );
}

export default Browse;
