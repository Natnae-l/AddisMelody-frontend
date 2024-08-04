import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserProfile {
  username: string;
  profilePicture: string;
  isLoading: boolean;
  error: string;
}

interface changeProfile {
  username: string;
  profilePicture: string;
}

const initialState: UserProfile = {
  username: "",
  profilePicture: "",
  isLoading: false,
  error: "",
};

const getUserProfileSlice = createSlice({
  name: "getUserProfile",
  initialState,
  reducers: {
    getUser: (state: UserProfile) => {
      state.isLoading = true;
    },
    success: (state: UserProfile, action: PayloadAction<UserProfile>) => {
      state.isLoading = false;
      state.profilePicture = action.payload.profilePicture;
      state.username = action.payload.username;
    },
    changeProfile: (
      state: UserProfile,
      action: PayloadAction<changeProfile>
    ) => {
      state.profilePicture = action.payload.profilePicture;
      state.username = action.payload.username;
    },
    failed: (state: UserProfile, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default getUserProfileSlice.reducer;
export const { getUser, success, changeProfile, failed } =
  getUserProfileSlice.actions;
