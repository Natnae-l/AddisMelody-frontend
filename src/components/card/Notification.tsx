import { Paragraph } from "../../styled /Text";
import { Container } from "../../styled /WelcomeStyled";

interface Notification {
  title: string;
  body: string;
  time: string;
}

function NotificationCard({ title, body, time }: Notification) {
  return (
    <Container
      $gap="4px"
      $padding="5px"
      $border="2px solid #c89898"
      $borderRadius="10px"
      $width="300px !important"
    >
      <Paragraph $fontSize="1.2rem" $fontWeight={500}>
        {title}
      </Paragraph>
      <Paragraph $fontSize=".9rem" $fontWeight={200}>
        {body}
      </Paragraph>
      <Paragraph $fontSize=".9rem" $fontWeight={400}>
        {time}
      </Paragraph>
    </Container>
  );
}

export default NotificationCard;
