import { HorizontalContainer } from "../../styled /WelcomeStyled";
import searchIcon from "../../assets/search.png";

function Search() {
  return (
    <HorizontalContainer $justContent="center">
      <div
        className="input-icons"
        style={{
          display: "flex",
          border: "1px solid #bbbaba",
          borderRadius: "1rem",
          padding: "4px 5px",
        }}
      >
        <img src={searchIcon} alt="" width="20px" />
        <input
          type="text"
          placeholder="search"
          style={{ outline: "none", border: "none", paddingInline: "10px" }}
        />
      </div>
    </HorizontalContainer>
  );
}

export default Search;
