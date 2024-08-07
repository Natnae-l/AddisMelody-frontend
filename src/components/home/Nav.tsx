import { NavLink } from "react-router-dom";
import { H2, Li, StyledNav, Ul } from "../../styled /Layout";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/authenticatedSlice";

function Nav() {
  const dispatch = useDispatch();
  return (
    <StyledNav>
      <Ul>
        <H2>Library</H2>
        <NavLink
          to=""
          style={({}) => {
            return {
              textDecoration: "none",
              boxSizing: "border-box",
            };
          }}
        >
          <Li>Songs</Li>
        </NavLink>
        <NavLink
          to="/dashboard/favourite"
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              background: isActive ? "#494641" : "inherit",
              padding: isActive ? "10px 15px" : "inherit",
              borderRadius: isActive ? "10px" : "inherit",
              boxSizing: "border-box",
            };
          }}
        >
          <Li>Favourite Songs</Li>
        </NavLink>
        <NavLink
          to="add"
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              background: isActive ? "#494641" : "inherit",
              padding: isActive ? "10px 15px" : "inherit",
              borderRadius: isActive ? "10px" : "inherit",
              boxSizing: "border-box",
            };
          }}
        >
          <Li>Add Song</Li>
        </NavLink>
        <NavLink
          to="statistics"
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              background: isActive ? "#494641" : "inherit",
              padding: isActive ? "10px 15px" : "inherit",
              borderRadius: isActive ? "10px" : "inherit",
              boxSizing: "border-box",
            };
          }}
        >
          <Li>Statistics</Li>
        </NavLink>
      </Ul>
      <Ul>
        <Li onClick={() => dispatch(logOut())}>Log Out</Li>
      </Ul>{" "}
    </StyledNav>
  );
}

export default Nav;
