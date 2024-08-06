import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Authenticated {
  isLoading: boolean;
  authenticated: boolean;
  userId: string;
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
  error: "",
};

const loggedInSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state: Authenticated, _action: PayloadAction<LoginData>) => {
      state.isLoading = true;
    },
    loggedIn: (state: Authenticated, action: PayloadAction<string>) => {
      state.authenticated = true;
      state.isLoading = false;
      state.error = "";
      state.userId = action.payload;
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
