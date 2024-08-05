import { call, put, takeEvery } from "redux-saga/effects";
import { create, failed, successful } from "../createAccountSlice";
import axios, { AxiosResponse } from "axios";
import { LoginData } from "../authenticatedSlice";
import { PayloadAction } from "@reduxjs/toolkit";

function* tryCreateAccount(action: PayloadAction<LoginData>) {
  try {
    const response: AxiosResponse = yield call(() =>
      axios.post(import.meta.env.VITE_CREATE_ACCOUNT, {
        username: action.payload.username,
        password: action.payload.password,
      })
    );

    yield put(successful(response.data));
  } catch (error: any) {
    yield put(failed(error.response.data));
  }
}

function* createAccount() {
  yield takeEvery(create.type, tryCreateAccount);
}

export default createAccount;
