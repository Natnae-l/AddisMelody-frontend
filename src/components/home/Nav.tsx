import { Link } from "react-router-dom";
import { H2, Li, StyledNav, Ul } from "../../styled /Layout";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/authenticatedSlice";

function Nav() {
  const dispatch = useDispatch();
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
          <Li>Add Song</Li>
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <Li>Statistics</Li>
        </Link>
        <Link to="" style={{ textDecoration: "none" }}>
          <Li>Favourite Songs</Li>
        </Link>
      </Ul>
      <Ul>
        <Li onClick={() => dispatch(logOut())}>Log Out</Li>
      </Ul>{" "}
    </StyledNav>
  );
}

export default Nav;
