import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FetchSong } from "./saga/fetchSongSaga";

export interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre:
    | "Pop"
    | "Hip-Hop/Rap"
    | "Rock"
    | "Electronic Dance Music (EDM)"
    | "R&B (Rhythm and Blues)";
  banner?: string;
  audio?: string;
  favouritedBy?: string[];
}

export interface AllSong {
  isLoading: boolean;
  songs: Song[];
  error: string;
}

const initialState: AllSong = {
  isLoading: false,
  songs: [],
  error: "",
};

const SongSlice = createSlice({
  name: "songList",
  initialState,
  reducers: {
    fetchSongs: (state: AllSong, _action: PayloadAction<FetchSong>) => {
      state.isLoading = true;
    },
    success: (state: AllSong, action: PayloadAction<Song[]>) => {
      state.isLoading = false;
      state.songs = action.payload;
    },
    failed: (state: AllSong, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default SongSlice.reducer;
export const { fetchSongs, success, failed } = SongSlice.actions;
