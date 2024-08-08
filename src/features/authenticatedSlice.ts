import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Authenticated {
  isLoading: boolean;
  authenticated: boolean;
  userId: string;
  profilePicture: string;
  error: string;
}

export interface LoginData {
  username: string | undefined;
  password: string | undefined;
}

const initialState: Authenticated = {
  isLoading: false,
  authenticated: false,
  userId: "",
  profilePicture: "",
  error: "",
};

interface LoginInfo {
  userId: string;
  profilePicture: string;
}

const loggedInSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state: Authenticated, _action: PayloadAction<LoginData>) => {
      state.isLoading = true;
    },
    loggedIn: (state: Authenticated, action: PayloadAction<LoginInfo>) => {
      state.authenticated = true;
      state.isLoading = false;
      state.error = "";
      state.userId = action.payload.userId;
      state.profilePicture = action.payload.profilePicture;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    logOut: (state: Authenticated) => {
      state.isLoading = false;
      state.authenticated = false;
    },
  },
});

export default loggedInSlice.reducer;
export const { logIn, loggedIn, loginFailure, logOut } = loggedInSlice.actions;
