import { Form, Link } from "react-router-dom";
import { A, Button, Input, Paragraph } from "../../styled /Text";
import { Container, Div } from "../../styled /WelcomeStyled";
import { useRef, useState } from "react";

interface LoginData {
  username: string | undefined;
  password: string | undefined;
}

function Login() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [warn, setWarn] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, password }: LoginData = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };

    if (username && password) {
      setWarn(false);
    } else {
      setWarn(true);
    }
  };
  return (
    <Div $gap=".1rem">
      <Paragraph $fontWeight={400} $fontSize="2rem">
        Welcome Back
      </Paragraph>
      <Paragraph $fontSize="1.15rem" $fontWeight={200}>
        Please sign in or register for new account
      </Paragraph>

      <Form onSubmit={(e) => handleSubmit(e)}>
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
              placeholder="your username"
              ref={usernameRef}
            />
          </div>
          <div>
            {" "}
            <label htmlFor="" style={{ color: "black" }}>
              Password
            </label>
            <Input
              $inputColor="black"
              placeholder="*******"
              ref={passwordRef}
            />
          </div>
          <Button>Log In</Button>
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              paddingBlock: "1rem",
            }}
          >
            <A> Register new account</A>
          </Link>
        </Container>
      </Form>
    </Div>
  );
}

export default Login;
