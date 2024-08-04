import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  Token,
  LoginData,
  logIn,
  loggedIn,
  loginFailure,
} from "../authenticatedSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* tryLogIn(action: PayloadAction<LoginData>) {
  try {
    let response: AxiosResponse = yield call(() =>
      axios.put(
        "http://localhost:3000/account/login",
        {
          username: action.payload.username,
          password: action.payload.password,
        },
        { withCredentials: true }
      )
    );

    let data: Token = response.data;

    yield put(loggedIn({ token: data.token, refreshToken: data.refreshToken }));
  } catch (error: any) {
    yield put(loginFailure(error.response.data.error));
  }
}

function* auth() {
  yield takeEvery(logIn.type, tryLogIn);
}

export default auth;
