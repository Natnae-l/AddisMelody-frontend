import { StyledNav } from "../../styled /Layout";
import { Paragraph } from "../../styled /Text";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import notificatioIcon from "../../assets/bell.png";
import userIcon from "../../assets/user.png";
import Speakers from "../../assets/live-music.png";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changePage } from "../../features/pageSlice";

function Header() {
  const dispatch = useDispatch();
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
        <HorizontalContainer $justContent="flex-end" $gap="20px">
          <img
            src={Speakers}
            className="pointer"
            width="25px"
            height="25px"
            onClick={() => dispatch(changePage({ page: "" }))}
          />
          <img
            src={notificatioIcon}
            className="pointer"
            width="25px"
            height="25px"
            alt=""
            onClick={() => dispatch(changePage({ page: "notification" }))}
          />
          <img
            src={userIcon}
            className="pointer"
            width="30px"
            alt=""
            onClick={() => dispatch(changePage({ page: "user" }))}
          />
        </HorizontalContainer>
      </HorizontalContainer>
    </StyledNav>
  );
}

export default Header;
