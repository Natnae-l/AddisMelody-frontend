import { StyledNav } from "../../styled /Layout";
import { Paragraph } from "../../styled /Text";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import notificatioIcon from "../../assets/bell.png";
import userIcon from "../../assets/user.png";

import { Link, useLocation } from "react-router-dom";
import Search from "./Search";

function Header() {
  const location = useLocation().pathname;
  const breadCrumb = location.slice(1).replace("/", " > ");

  return (
    <StyledNav $padding="20px 40px" $noneWidth="0">
      <HorizontalContainer>
        {" "}
        <HorizontalContainer $justContent="flex-start">
          <Paragraph $color="black" $fontWeight={200}>
            {breadCrumb}
          </Paragraph>
        </HorizontalContainer>
        <Search />
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
