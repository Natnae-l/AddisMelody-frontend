import { StyledNav } from "../../styled /Layout";
import { Paragraph } from "../../styled /Text";
import { HorizontalContainer } from "../../styled /WelcomeStyled";
import notificatioIcon from "../../assets/bell.png";
import userIcon from "../../assets/user.png";
import Speakers from "../../assets/live-music.png";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../features/pageSlice";
import { RootState } from "../../app/store";
import axios from "axios";
import { readAll } from "../../features/notificationSlice";

function Header() {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const breadCrumb = location.slice(1).replace("/", " > ");

  const page = useSelector((state: RootState) => state.page);
  const notificationState = useSelector(
    (state: RootState) => state.notification
  );

  const unreadCount = notificationState.notifications.reduce(
    (init: number, item) => {
      return item.read ? init : init + 1;
    },
    0
  );

  const handleClick = async (notificationId: number) => {
    try {
      await axios.patch(
        import.meta.env.VITE_MARK_READ + `/${notificationId}`,
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(readAll());
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const { profilePicture } = useSelector(
    (state: RootState) => state.getUserProfile
  );

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
          <div
            className="notification-container"
            onClick={() => handleClick(notificationState.notifications[0].time)}
          >
            <p className="notification-text">
              {unreadCount ? unreadCount : null}
            </p>
            <img
              src={notificatioIcon}
              className="notification-icon"
              alt=""
              onClick={() =>
                page.page === "notification"
                  ? dispatch(changePage({ page: "" }))
                  : dispatch(changePage({ page: "notification" }))
              }
            />
          </div>

          <img
            src={
              profilePicture && profilePicture != "" ? profilePicture : userIcon
            }
            className="pointer"
            width="30px"
            alt=""
            onClick={() =>
              page.page == "user"
                ? dispatch(changePage({ page: "" }))
                : dispatch(changePage({ page: "user" }))
            }
          />
        </HorizontalContainer>
      </HorizontalContainer>
    </StyledNav>
  );
}

export default Header;
