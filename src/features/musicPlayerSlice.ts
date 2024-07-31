import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Player {
  music: string;
  banner: string;
}

const initialState: Player = {
  music: "",
  banner: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeMusic: (state: Player, action: PayloadAction<Player>) => {
      state.music = action.payload.music || "";
      state.banner = action.payload.banner || "";
    },
  },
});

export default playerSlice.reducer;
export const { changeMusic } = playerSlice.actions;
