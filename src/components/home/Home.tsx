import { Outlet } from "react-router-dom";
import { Layout, Main, MainDiv } from "../../styled /Layout";
import Nav from "./Nav";
import Header from "./Header";
import { MainContainer } from "../../styled /WelcomeStyled";
import TopLevel from "./TopLevel";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function Home() {
  const page = useSelector((state: RootState) => state.page);
  return (
    <Layout>
      <Nav />
      <Main>
        <Header />
        <MainContainer $gap="20px" $paddInline=" 0 10px 25px 20px">
          <Outlet />
          <MainDiv
            $flex={0.8}
            $radius="1.7rem"
            $max="700px"
            $position="relative"
            $shadow="0px 0px 7px 1px #c4c0c0"
            $height={page.page == "" ? "fit-content" : "73vh"}
            $padding={page.page == "" ? "0 0 0 0" : "0 .6%"}
            $margin="10px 0 0 0"
          >
            <TopLevel />
          </MainDiv>
        </MainContainer>
      </Main>
    </Layout>
  );
}

export default Home;
