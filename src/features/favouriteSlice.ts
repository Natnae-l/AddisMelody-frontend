import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AllSong, Song } from "./getSongSlice";

const initialState: AllSong = {
  isLoading: false,
  songs: [],
  error: "",
};

const favouriteSlice = createSlice({
  name: "favouriteList",
  initialState,
  reducers: {
    fetchFavourites: (state) => {
      state.isLoading = true;
    },
    success: (state, action: PayloadAction<Song[]>) => {
      state.isLoading = false;
      state.songs = action.payload;
    },
    failed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    pushSong: (state, action: PayloadAction<Song>) => {
      state.songs = [action.payload, ...state.songs];
    },
  },
});

export default favouriteSlice.reducer;
export const { fetchFavourites, success, failed, pushSong } =
  favouriteSlice.actions;
