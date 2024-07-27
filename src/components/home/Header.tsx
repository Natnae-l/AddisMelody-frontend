import { StyledNav } from "../../styled /Layout";
import { Paragraph } from "../../styled /Text";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import notificatioIcon from "../../assets/bell.png";
import userIcon from "../../assets/user.png";
import searchIcon from "../../assets/search.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <StyledNav $padding="20px 40px">
      <HorizontalContainer>
        {" "}
        <HorizontalContainer $justContent="flex-start">
          <Paragraph $color="black" $fontWeight={400}>
            album &gt; dashboard
          </Paragraph>
        </HorizontalContainer>
        <HorizontalContainer $justContent="center">
          <div
            className="input-icons"
            style={{
              display: "flex",
              border: "1px solid black",
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
        <HorizontalContainer $justContent="flex-end" $gap="20px">
          <Link to="">
            <img src={notificatioIcon} width="25px" height="25px" alt="" />
          </Link>
          <Link to="">
            <img src={userIcon} width="30px" alt="" />
          </Link>
        </HorizontalContainer>
      </HorizontalContainer>
    </StyledNav>
  );
}

export default Header;
