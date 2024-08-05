import { Outlet } from "react-router-dom";
import { Layout, Main, MainDiv } from "../../styled /Layout";
import Nav from "./Nav";
import Header from "./Header";
import { MainContainer } from "../../styled /WelcomeStyled";
import TopLevel from "./TopLevel";

function Home() {
  return (
    <Layout>
      <Nav />
      <Main>
        <Header />
        <MainContainer $gap="20px" $paddInline=" 0 10px 25px 20px">
          <Outlet />
          <MainDiv
            $flex={0.8}
            $radius="1.7rem !importtant"
            $padding="0"
            $max="700px"
          >
            <TopLevel />{" "}
          </MainDiv>
        </MainContainer>
      </Main>
    </Layout>
  );
}

export default Home;
