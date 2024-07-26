import { Link } from "react-router-dom";
import { A, Button, Input, Paragraph } from "../../styled /Text";
import { Div } from "../../styled /WelcomeStyled";

function Register() {
  return (
    <Div>
      <Paragraph $fontWeight={400} $fontSize="2rem">
        Welcome Back
      </Paragraph>
      <Paragraph $fontSize="1.15rem" $fontWeight={200}>
        Please sign in or register for new account
      </Paragraph>
      <form action="">
        <Div $backgroundColor="transparent">
          <div>
            <label htmlFor="" style={{ paddingBottom: "4px" }}>
              Username:
            </label>
            <Input $inputColor="black" placeholder="please enter username" />
          </div>
          <div>
            <label htmlFor="" style={{ paddingBottom: "4px" }}>
              password:
            </label>
            <Input $inputColor="black" placeholder="*******" />
          </div>
          <div>
            {" "}
            <label htmlFor="" style={{ color: "black" }}>
              confirm:
            </label>
            <Input $inputColor="black" placeholder="*******" />
          </div>
          <Button>Register</Button>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              paddingBlock: "1rem",
            }}
          >
            <A>Back to login</A>
          </Link>
        </Div>
      </form>
    </Div>
  );
}

export default Register;
