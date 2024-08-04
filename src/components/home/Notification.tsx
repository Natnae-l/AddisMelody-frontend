import { useSelector } from "react-redux";
import { Paragraph } from "../../styled /Text";
import { Container } from "../../styled /WelcomeStyled";
import NotificationCard from "../card/Notification";
import { RootState } from "../../app/store";
import { Notification as NotificationInterface } from "../../features/notificationSlice";

function Notification() {
  const notifications = useSelector((state: RootState) => state.notification);

  return (
    <>
      <Paragraph $fontSize="1.7rem" $padding="10px 40px 0 0 ">
        Notifications
      </Paragraph>
      <Container $padding="10px 0 0  0">
        {notifications.notifications.map(
          (notification: NotificationInterface) => (
            <NotificationCard
              title={notification.title}
              body={notification.body}
              time={notification.time}
            />
          )
        )}
      </Container>
    </>
  );
}

export default Notification;
