import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ProfileUpdate {
  isLoading: boolean;
  error: string;
  success: boolean;
}

const initialState: ProfileUpdate = {
  isLoading: false,
  error: "",
  success: false,
};

const profileUpdateSlice = createSlice({
  name: "profileUpdate",
  initialState,
  reducers: {
    update: (state: ProfileUpdate) => {
      state.isLoading = true;
    },
    success: (state: ProfileUpdate) => {
      state.isLoading = false;
      state.success = true;
    },
    failed: (state: ProfileUpdate, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    removeMessage: (state: ProfileUpdate) => {
      state.error = "";
      state.isLoading = false;
      state.success = false;
    },
  },
});

export default profileUpdateSlice.reducer;
export const { update, success, failed, removeMessage } =
  profileUpdateSlice.actions;
