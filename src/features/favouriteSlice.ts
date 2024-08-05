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
    fetchFavourites: (state: AllSong) => {
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
    pushSong: (state: AllSong, action: PayloadAction<Song>) => {
      console.log(action.payload);

      state.songs = [action.payload, ...state.songs];
    },
  },
});

export default favouriteSlice.reducer;
export const { fetchFavourites, success, failed, pushSong } =
  favouriteSlice.actions;
