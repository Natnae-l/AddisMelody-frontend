import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Player {
  music: string;
  banner: string;
  _id: string;
}

const initialState: Player = {
  music: "",
  banner: "",
  _id: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeMusic: (state: Player, action: PayloadAction<Player>) => {
      state.music = action.payload.music || "";
      state.banner = action.payload.banner || "";
      state._id = action.payload._id || "";
    },
  },
});

export default playerSlice.reducer;
export const { changeMusic } = playerSlice.actions;
