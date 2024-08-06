import { Paragraph } from "../../styled /Text";
import { Container } from "../../styled /WelcomeStyled";
import styled from "styled-components";
import moment from "moment";

interface Notification {
  title: string;
  body: string;
  time: number;
}

const StyledContainer = styled(Container)`
  gap: 4px;
  padding: 10px;
  border: 2px solid #c89898;
  border-radius: 10px;
  width: 300px !important;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled(Paragraph)`
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
`;

const Body = styled(Paragraph)`
  font-size: 0.9rem;
  font-weight: 200;
  color: #666;
`;

const Time = styled(Paragraph)`
  font-size: 0.7rem;
  font-weight: 400;
  color: #999;
  text-align: right;
`;

function NotificationCard({ title, body, time }: Notification) {
  return (
    <StyledContainer>
      <Title>{title}</Title>
      <Body>{body}</Body>
      <Time>{moment(time).calendar()}</Time>
    </StyledContainer>
  );
}

export default NotificationCard;
