import { Link } from "react-router-dom";
import { H2, Li, StyledNav, Ul } from "../../styled /Layout";

function Nav() {
  return (
    <StyledNav>
      <Ul>
        <H2>Library</H2>
        <Link to="" style={{ textDecoration: "none" }}>
          <Li>Browse</Li>
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <Li>Songs</Li>
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <Li>Statistics</Li>
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <Li>Recently played</Li>
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <Li>Favourite Songs</Li>
        </Link>
      </Ul>
    </StyledNav>
  );
}

export default Nav;
