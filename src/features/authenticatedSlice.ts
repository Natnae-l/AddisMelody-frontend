import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Authenticated {
  isLoading: boolean;
  authenticated: boolean;
  token: string;
  refreshToken: string;
  error: string;
}

export interface Token {
  token: string;
  refreshToken: string;
}

export interface LoginData {
  username: string | undefined;
  password: string | undefined;
}

const initialState: Authenticated = {
  isLoading: false,
  authenticated: false,
  token: "",
  refreshToken: "",
  error: "",
};

const loggedInSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state: Authenticated, _action: PayloadAction<LoginData>) => {
      state.isLoading = true;
    },
    loggedIn: (state: Authenticated, action: PayloadAction<Token>) => {
      state.authenticated = true;
      state.isLoading = false;
      state.error = "";
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    logOut: (state: Authenticated) => {
      state.isLoading = false;
      state.authenticated = false;
      state.refreshToken = "";
      state.token = "";
    },
  },
});

export default loggedInSlice.reducer;
export const { logIn, loggedIn, loginFailure, logOut } = loggedInSlice.actions;
