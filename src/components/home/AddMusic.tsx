import React, { useEffect, useRef, useState } from "react";
import { ThreeDot } from "react-loading-indicators";
import { Form } from "react-router-dom";
import { DisplayGrid } from "../../styled /WelcomeStyled";
import { Paragraph, Input, Button } from "../../styled /Text";
import { MainDiv } from "../../styled /Layout";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addSong,
  failed,
  removeMessage,
  success,
} from "../../features/AddSong";
import axios, { AxiosResponse } from "axios";
import { RootState } from "../../app/store";
import { loggedIn } from "../../features/authenticatedSlice";

export interface Song {
  title: string;
  artist: string;
  album: string;
  genre: string;
  favourite: boolean;
  private: boolean;
  audio?: File | null;
  banner?: File | null;
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

const genres = [
  "Pop",
  "Hip-Hop/Rap",
  "Rock",
  "Electronic Dance Music (EDM)",
  "R&B (Rhythm and Blues)",
];

const AddMusic = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const artistRef = useRef<HTMLInputElement>(null);
  const albumRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLSelectElement>(null); // Changed to HTMLSelectElement
  const [isPrivate, setIsPrivate] = useState(false);
  const audioRef = useRef<HTMLInputElement>(null);
  const bannerRef = useRef<HTMLInputElement>(null);
  const [audioFileName, setAudioFileName] = useState("");
  const [bannerFileName, setBannerFileName] = useState("");
  const dispatch = useDispatch();
  const tokenState = useSelector((state: RootState) => state.auth);
  const addMusicState = useSelector((state: RootState) => state.addSong);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("title", titleRef.current?.value || "");
    formData.append("artist", artistRef.current?.value || "");
    formData.append("album", albumRef.current?.value || "");
    formData.append("genre", genreRef.current?.value || ""); // Updated to get value from select
    formData.append("favourite", "false");
    formData.append("private", String(isPrivate));

    if (audioRef.current?.files?.[0]) {
      formData.append("audio", audioRef.current.files[0]);
    }
    if (bannerRef.current?.files?.[0]) {
      formData.append("banner", bannerRef.current.files[0]);
    }

    try {
      dispatch(addSong());

      const response: AxiosResponse = await axios.post(
        "https://addismelody-backend.onrender.com/songs",
        formData,
        {
          headers: {
            Authorization: `Bearer ${JSON.stringify(tokenState)}`,
          },
          withCredentials: true,
        }
      );

      const { token, refreshToken } = response.data;

      if (token && refreshToken) {
        dispatch(loggedIn({ token, refreshToken }));
      }

      dispatch(success());
    } catch (error: any) {
      const { token, refreshToken } = error.response.data;

      if (token && refreshToken) {
        dispatch(loggedIn({ token, refreshToken }));
      }
      dispatch(failed(error.response.data.message || "Something went wrong"));
    }
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

  useEffect(() => {
    if (addMusicState.success || addMusicState.error) {
      setTimeout(() => dispatch(removeMessage()), 6000);
    }
  }, [addMusicState.success, addMusicState.error]);

  return (
    <MainDiv $flex={2.2} $radius="1.7rem" $fill="700px">
      <Paragraph $fontWeight={400} $fontSize="2rem" $padding="20px 0 0 0">
        Add New Song
      </Paragraph>

      <Paragraph $fontWeight={400} $fontSize="2rem" $padding="20px 0 0 0">
        {addMusicState.success
          ? "Song added successfully"
          : addMusicState.error
          ? addMusicState.error
          : ""}
      </Paragraph>

      <Form onSubmit={handleSubmit}>
        <DisplayGrid $gap="20px" $padding="20px">
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
            <select
              id="genre"
              ref={genreRef}
              style={{
                padding: "8px",
                borderRadius: "4px",
                borderColor: "gray",
              }}
            >
              <option value="" disabled>
                Select a genre
              </option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
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
            {addMusicState.isLoading ? (
              <ThreeDot variant="pulsate" color="#4e504f" size="small" />
            ) : (
              "Add Song"
            )}
          </Button>
        </DisplayGrid>
      </Form>
    </MainDiv>
  );
};

export default AddMusic;
