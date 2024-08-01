import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MakeFavouritePayload {
  id: string;
}
export interface Loading {
  isLoading: boolean;
}
const initialState: Loading = {
  isLoading: false,
};

const makeFavouriteSlice = createSlice({
  name: "makeFavourite",
  initialState,
  reducers: {
    makeFavourite: (
      state: Loading,
      _action: PayloadAction<MakeFavouritePayload>
    ) => {
      state.isLoading = true;
    },
    done: (state: Loading) => {
      state.isLoading = false;
    },
    failed: (state: Loading) => {
      state.isLoading = false;
    },
  },
});

export default makeFavouriteSlice.reducer;
export const { makeFavourite, done, failed } = makeFavouriteSlice.actions;
