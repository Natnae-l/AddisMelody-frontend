import { Paragraph } from "../../styled /Text";
import { HorizontalContainer } from "../../styled /WelcomeStyled";

interface Total {
  title: string;
  amount: number;
}

function Total({ title, amount }: Total) {
  return (
    <HorizontalContainer $gap="10px" $width="fit-content" $padding="10px">
      <Paragraph $fontSize="1.1rem" $fontWeight={400}>
        {title}
      </Paragraph>
      <Paragraph $fontSize="1.1rem" $fontWeight={300}>
        {amount}
      </Paragraph>
    </HorizontalContainer>
  );
}

export default Total;
