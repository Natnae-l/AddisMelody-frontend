import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginData } from "./authenticatedSlice";

export interface CreateAccount {
  isLoading: boolean;
  message: string;
  error: string;
}

const initialState: CreateAccount = {
  isLoading: false,
  message: "",
  error: "",
};

export interface Message {
  message: string;
}

const CreateAccountSlice = createSlice({
  name: "createAccount",
  initialState,
  reducers: {
    create: (state: CreateAccount, action: PayloadAction<LoginData>) => {
      state.isLoading = true;
      state.message = "";
    },
    successful: (state: CreateAccount, action: PayloadAction<Message>) => {
      state.isLoading = false;
      state.message = action.payload.message;
    },
    failed: (state: CreateAccount, action: PayloadAction<Message>) => {
      state.isLoading = false;
      state.error = action.payload.message;
      state.message = "";
    },
  },
});

export default CreateAccountSlice.reducer;
export const { create, successful, failed } = CreateAccountSlice.actions;
