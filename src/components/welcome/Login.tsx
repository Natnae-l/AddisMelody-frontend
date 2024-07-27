import { Form, Link, Navigate } from "react-router-dom";
import { Button, Input, Paragraph } from "../../styled /Text";
import { Container, Div } from "../../styled /WelcomeStyled";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginData, logIn } from "../../features/authenticatedSlice";
import { ThreeDot } from "react-loading-indicators";
import { RootState } from "../../app/store";

function Login() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const authState = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const [warn, setWarn] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { username, password }: LoginData = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };

    if (username && password) {
      setWarn(false);
      dispatch(logIn({ username, password }));
    } else {
      setWarn(true);
    }
  };
  if (authState.authenticated) {
    return <Navigate to="/dashboard" replace={true} />;
  }
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
          <Paragraph $fontSize=".9rem" $fontWeight={400} $color="red">
            Invalid input, please check your inputs
          </Paragraph>
        )}
        {authState.error != "" ? (
          <Paragraph $fontSize=".9rem" $fontWeight={400} $color="red">
            {authState.error}
          </Paragraph>
        ) : null}
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
          <Button>
            {" "}
            {authState.isLoading ? (
              <ThreeDot variant="pulsate" color="#4e504f" size="small" />
            ) : (
              "Log In"
            )}
          </Button>
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              paddingBlock: "1rem",
              color: "#4e504f",
            }}
            className="hover"
          >
            Register new account
          </Link>
        </Container>
      </Form>
    </Div>
  );
}

export default Login;
