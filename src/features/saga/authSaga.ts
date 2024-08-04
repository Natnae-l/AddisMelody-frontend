import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  LoginData,
  logIn,
  loggedIn,
  loginFailure,
} from "../authenticatedSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* tryLogIn(action: PayloadAction<LoginData>) {
  try {
    yield call(() =>
      axios.put(
        "https://addismelody-backend.onrender.com/account/login",
        {
          username: action.payload.username,
          password: action.payload.password,
        },
        { withCredentials: true }
      )
    );

    yield put(loggedIn());
  } catch (error: any) {
    yield put(loginFailure(error.response.data.error));
  }
}

function* auth() {
  yield takeEvery(logIn.type, tryLogIn);
}

export default auth;
