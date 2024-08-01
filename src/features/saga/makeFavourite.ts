import { put, call, takeEvery, select } from "redux-saga/effects";
import {
  MakeFavouritePayload,
  done,
  failed,
  makeFavourite,
} from "../makeFavouriteSlice";
import { Token, loggedIn } from "../authenticatedSlice";
import { RootState } from "../../app/store";
import { getToken } from "./fetchSongSaga";
import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

function* tryMake(action: PayloadAction<MakeFavouritePayload>) {
  try {
    let token: Token = yield select((state: RootState) => getToken(state));
    console.log(token);

    const response: Token = yield call(
      () =>
        axios
          .patch(
            `http://localhost:3000/songs/favourite/${action.payload.id}`,
            {},
            {
              withCredentials: true, // Include credentials in the request
              headers: {
                Accept: "application/json",
                Authorization: `Bearer ${JSON.stringify(token)}`, // Pass token without stringifying
              },
            }
          )
          .then((response) => response.data) // Extract the data from the response
    );

    yield put(done());
    if (response.token && response.refreshToken) {
      yield put(
        loggedIn({ token: response.token, refreshToken: response.refreshToken })
      );
    }
  } catch (error: any) {
    yield put(failed());
    if (error.response.data.token && error.response.data.refreshToken) {
      yield put(
        loggedIn({
          token: error.response.data.token,
          refreshToken: error.response.data.refreshToken,
        })
      );
    }
  }
}

function* setFavourite() {
  yield takeEvery(makeFavourite.type, tryMake);
}

export default setFavourite;
