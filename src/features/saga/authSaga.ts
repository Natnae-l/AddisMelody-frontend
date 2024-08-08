import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  LoginData,
  logIn,
  loggedIn,
  loginFailure,
} from "../authenticatedSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { changeProfile } from "../getUserProfileSlice";

function* tryLogIn(action: PayloadAction<LoginData>) {
  try {
    const response: AxiosResponse = yield call(() =>
      axios.put(
        import.meta.env.VITE_LOGIN,
        {
          username: action.payload.username,
          password: action.payload.password,
        },
        { withCredentials: true }
      )
    );

    yield put(
      loggedIn({
        userId: response.data.userId,
        profilePicture: response.data.profilePicture,
      })
    );

    yield put(
      changeProfile({
        username: response.data.userId,
        profilePicture: response.data.profilePicture,
      })
    );
  } catch (error: any) {
    yield put(loginFailure(error.response.data.error));
  }
}

function* auth() {
  yield takeEvery(logIn.type, tryLogIn);
}

export default auth;
