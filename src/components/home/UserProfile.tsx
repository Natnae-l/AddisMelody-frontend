import React, { useRef, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import { Form } from "react-router-dom";
import { Container } from "../../styled /WelcomeStyled";
import { Paragraph, Input, Button } from "../../styled /Text";
import { MainDiv } from "../../styled /Layout";
import styled from "styled-components";

// Styled components
const HiddenFileInput = styled.input`
  display: none;
`;

const CustomFileLabel = styled.label`
  background-color: #4e504f;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;
  text-align: center;
`;

const FileNameDisplay = styled.div`
  margin-top: 10px;
  color: black;
`;

function UserProfile() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const profilePictureRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("username", usernameRef.current?.value || "");
    formData.append("password", passwordRef.current?.value || "");

    if (profilePictureRef.current?.files?.[0]) {
      formData.append("profilePicture", profilePictureRef.current.files[0]);
    }

    console.log(formData);

    // Handle the form submission here (e.g., send the form data to the server)
  };

  const handleFileChange = () => {
    if (profilePictureRef.current?.files?.[0]) {
      setFileName(profilePictureRef.current.files[0].name);
    } else {
      setFileName("");
    }
  };

  return (
    <MainDiv $flex={2.2} $radius="1.7rem" $fill="700px">
      <Paragraph $fontWeight={300} $fontSize="1.5rem" $padding="20px 0 0 0">
        Profile
      </Paragraph>

      <Form onSubmit={handleSubmit}>
        <Container $gap="20px" $padding="20px" $width="300px">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="username" style={{ paddingBottom: "4px" }}>
              Username
            </label>
            <Input
              $inputColor="black"
              placeholder="Username"
              ref={usernameRef}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="password" style={{ paddingBottom: "4px" }}>
              Password
            </label>
            <Input
              $inputColor="black"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="profilePicture" style={{ paddingBottom: "4px" }}>
              Profile Picture
            </label>
            <HiddenFileInput
              type="file"
              accept="image/*"
              ref={profilePictureRef}
              onChange={handleFileChange}
              id="profilePicture"
            />
            <CustomFileLabel htmlFor="profilePicture">
              Choose File
            </CustomFileLabel>
            {fileName && <FileNameDisplay>{fileName}</FileNameDisplay>}
          </div>

          <Button>
            {false ? (
              <ThreeDot variant="pulsate" color="#4e504f" size="small" />
            ) : (
              "Update"
            )}
          </Button>
        </Container>
      </Form>
    </MainDiv>
  );
}

export default UserProfile;
