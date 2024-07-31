import { Paragraph } from "../../styled /Text";
import { Container } from "../../styled /WelcomeStyled";
import NotificationCard from "../card/Notification";

function Notification() {
  return (
    <>
      <Paragraph $fontSize="1.7rem" $padding="10px 40px 0 0 ">
        Notifications
      </Paragraph>
      <Container $padding="10px 0 0  0">
        <NotificationCard title="title" body="lorem lorem lorem" time="5h" />
        <NotificationCard title="title" body="lorem lorem lorem" time="5h" />
      </Container>
    </>
  );
}

export default Notification;
