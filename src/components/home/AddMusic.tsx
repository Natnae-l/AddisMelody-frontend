import React, { useRef, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import { Form } from "react-router-dom";
import { Container } from "../../styled /WelcomeStyled";
import { Paragraph, Input, Button } from "../../styled /Text";
import { MainDiv } from "../../styled /Layout";
import styled from "styled-components";

export interface Song {
  title: string;
  artist: string;
  album: string;
  genre: string;
  favourite: boolean;
  private: boolean;
  audio: File | null;
  banner: File | null;
}

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

function AddMusic() {
  const titleRef = useRef<HTMLInputElement>(null);
  const artistRef = useRef<HTMLInputElement>(null);
  const albumRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLInputElement>(null);
  const [isPrivate, setIsPrivate] = useState(false);
  const audioRef = useRef<HTMLInputElement>(null);
  const bannerRef = useRef<HTMLInputElement>(null);
  const [audioFileName, setAudioFileName] = useState("");
  const [bannerFileName, setBannerFileName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", titleRef.current?.value || "");
    formData.append("artist", artistRef.current?.value || "");
    formData.append("album", albumRef.current?.value || "");
    formData.append("genre", genreRef.current?.value || "");
    formData.append("favourite", "false");
    formData.append("private", String(isPrivate));

    if (audioRef.current?.files?.[0]) {
      formData.append("audio", audioRef.current.files[0]);
    }
    if (bannerRef.current?.files?.[0]) {
      formData.append("banner", bannerRef.current.files[0]);
    }

    console.log(formData);

    // Handle the form submission here (e.g., send the form data to the server)
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFileName: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  return (
    <MainDiv $flex={2.2} $radius="1.7rem" $fill="700px">
      <Paragraph $fontWeight={400} $fontSize="2rem" $padding="20px 0 0 0">
        Add New Song
      </Paragraph>

      <Form onSubmit={handleSubmit}>
        <Container $gap="20px" $padding="20px">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="title" style={{ paddingBottom: "4px" }}>
              Title
            </label>
            <Input
              $inputColor="black"
              placeholder="Song title"
              ref={titleRef}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="artist" style={{ paddingBottom: "4px" }}>
              Artist
            </label>
            <Input
              $inputColor="black"
              placeholder="Artist name"
              ref={artistRef}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="album" style={{ paddingBottom: "4px" }}>
              Album
            </label>
            <Input
              $inputColor="black"
              placeholder="Album name"
              ref={albumRef}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="genre" style={{ paddingBottom: "4px" }}>
              Genre
            </label>
            <Input $inputColor="black" placeholder="Genre" ref={genreRef} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="private" style={{ paddingBottom: "4px" }}>
              Private
            </label>
            <div style={{ display: "flex", gap: "20px" }}>
              <label>
                <input
                  type="radio"
                  name="private"
                  value="true"
                  onChange={() => setIsPrivate(true)}
                />
                True
              </label>
              <label>
                <input
                  type="radio"
                  name="private"
                  value="false"
                  onChange={() => setIsPrivate(false)}
                />
                False
              </label>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="audio" style={{ paddingBottom: "4px" }}>
              Audio
            </label>
            <HiddenFileInput
              type="file"
              accept="audio/*"
              ref={audioRef}
              onChange={(e) => handleFileChange(e, setAudioFileName)}
              id="audio"
            />
            <CustomFileLabel htmlFor="audio">Choose Audio File</CustomFileLabel>
            {audioFileName && (
              <FileNameDisplay>{audioFileName}</FileNameDisplay>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="banner" style={{ paddingBottom: "4px" }}>
              Banner
            </label>
            <HiddenFileInput
              type="file"
              accept="image/*"
              ref={bannerRef}
              onChange={(e) => handleFileChange(e, setBannerFileName)}
              id="banner"
            />
            <CustomFileLabel htmlFor="banner">
              Choose Banner Image
            </CustomFileLabel>
            {bannerFileName && (
              <FileNameDisplay>{bannerFileName}</FileNameDisplay>
            )}
          </div>
          <Button>
            {false ? (
              <ThreeDot variant="pulsate" color="#4e504f" size="small" />
            ) : (
              "Add Song"
            )}
          </Button>
        </Container>
      </Form>
    </MainDiv>
  );
}

export default AddMusic;
