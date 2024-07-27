import { Outlet } from "react-router-dom";
import { Layout, Main } from "../../styled /Layout";
import Nav from "./Nav";
import Header from "./Header";

function Home() {
  return (
    <Layout>
      <Nav />
      <Main>
        <Header />
        <Outlet />
      </Main>
    </Layout>
  );
}

export default Home;
