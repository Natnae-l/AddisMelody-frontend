import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AddSong {
  isLoading: boolean;
  success: boolean;
  error: string;
}

const initialState: AddSong = {
  isLoading: false,
  success: false,
  error: "",
};

const addSongSlice = createSlice({
  name: "addSong",
  initialState,
  reducers: {
    addSong: (state: AddSong) => {
      state.isLoading = true;
    },
    success: (state: AddSong) => {
      state.isLoading = false;
      state.success = true;
    },
    failed: (state: AddSong, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeMessage: (state: AddSong) => {
      state.success = false;
      state.error = "";
    },
  },
});

export default addSongSlice.reducer;
export const { addSong, success, failed, removeMessage } = addSongSlice.actions;
