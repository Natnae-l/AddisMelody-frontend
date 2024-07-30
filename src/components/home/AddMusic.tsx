import React, { useRef, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import { Form } from "react-router-dom";
import { Container } from "../../styled /WelcomeStyled";
import { Paragraph, Input, Button } from "../../styled /Text";
import { MainDiv } from "../../styled /Layout";

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

function AddMusic() {
  const titleRef = useRef<HTMLInputElement>(null);
  const artistRef = useRef<HTMLInputElement>(null);
  const albumRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLInputElement>(null);
  const [isPrivate, setIsPrivate] = useState(false);
  const audioRef = useRef<HTMLInputElement>(null);
  const bannerRef = useRef<HTMLInputElement>(null);

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
          <div>
            <label htmlFor="audio" style={{ paddingBottom: "4px" }}>
              Audio
            </label>
            <Input
              $inputColor="black"
              type="file"
              accept="audio/*"
              ref={audioRef}
            />
          </div>
          <div>
            <label htmlFor="banner" style={{ paddingBottom: "4px" }}>
              Banner
            </label>
            <Input
              $inputColor="black"
              type="file"
              accept="image/*"
              ref={bannerRef}
            />
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
