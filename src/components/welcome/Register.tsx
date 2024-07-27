import { Link } from "react-router-dom";
import { A, Button, Input, Paragraph } from "../../styled /Text";
import { Container, Div } from "../../styled /WelcomeStyled";
import { useRef, useState } from "react";

interface FormData {
  username: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
}

function Register() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [warn, setWarn] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, password, confirmPassword }: FormData = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
    };

    if (username && password && confirmPassword) {
      if (password != confirmPassword) {
        setWarn(true);
        return;
      }

      setWarn(false);
    } else {
      setWarn(true);
    }
  };
  return (
    <Div $gap="0rem">
      <Paragraph $fontWeight={400} $fontSize="2rem">
        Welcome Back
      </Paragraph>
      <Paragraph $fontSize="1.15rem" $fontWeight={200}>
        Please sign in or register for new account
      </Paragraph>

      <form onSubmit={(e) => handleSubmit(e)}>
        {warn && (
          <Paragraph $fontSize=".9rem" $fontWeight={200} $color="red">
            Invalid input, please check your inputs
          </Paragraph>
        )}
        <Container $gap="7px">
          <div>
            <label htmlFor="" style={{ paddingBottom: "4px" }}>
              Username
            </label>
            <Input
              $inputColor="black"
              placeholder="new username"
              ref={usernameRef}
            />
          </div>
          <div>
            <label htmlFor="" style={{ paddingBottom: "4px" }}>
              password
            </label>
            <Input
              $inputColor="black"
              placeholder="*******"
              ref={confirmPasswordRef}
            />
          </div>
          <div>
            {" "}
            <label htmlFor="" style={{ color: "black" }}>
              confirm:
            </label>
            <Input
              $inputColor="black"
              placeholder="*******"
              ref={passwordRef}
            />
          </div>
          <div>
            <Button>Register</Button>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                paddingBlock: "1rem",
              }}
            >
              <A style={{ paddingInlineStart: "15px" }}>Back to login</A>
            </Link>
          </div>
        </Container>
      </form>
    </Div>
  );
}

export default Register;
