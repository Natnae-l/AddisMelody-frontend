import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Authenticated {
  isLoading: boolean;
  authenticated: boolean;
  error: string;
}

export interface LoginData {
  username: string | undefined;
  password: string | undefined;
}

const initialState: Authenticated = {
  isLoading: false,
  authenticated: false,
  error: "",
};

const loggedInSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state: Authenticated, action: PayloadAction<LoginData>) => {
      state.isLoading = true;
    },
    loggedIn: (state: Authenticated) => {
      state.authenticated = true;
      state.isLoading = false;
      state.error = "";
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    logOut: (state: Authenticated, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export default loggedInSlice.reducer;
export const { logIn, loggedIn, loginFailure, logOut } = loggedInSlice.actions;
