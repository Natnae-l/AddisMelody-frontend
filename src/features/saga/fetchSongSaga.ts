import { call, put, select, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Token, loggedIn } from "../authenticatedSlice";
import axios from "axios";
import { Song, failed, success } from "../getSongSlice";

export interface FetchSong {
  genre?: string;
  page?: number;
}

export interface ResponseData extends Token {
  songs: Song[];
  count: number;
}
export const getToken = (state: RootState): Token => state.auth;
function* tryFetch(action: PayloadAction<FetchSong>) {
  try {
    let token: Token = yield select((state: RootState) => getToken(state));

    const response: ResponseData = yield call(
      () =>
        axios
          .get(`http://localhost:3000/songs/list`, {
            params: {
              page: action.payload.page || 0,
              genre: action.payload.genre,
            },
            withCredentials: true, // Include credentials in the request
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${JSON.stringify(token)}`, // Pass token without stringifying
            },
          })
          .then((response) => response.data) // Extract the data from the response
    );

    yield put(success(response.songs));
    if (response.token && response.refreshToken) {
      yield put(
        loggedIn({ token: response.token, refreshToken: response.refreshToken })
      );
    }
  } catch (error: any) {
    console.log(error);
    if (error.response.data.token && error.response.data.refreshToken) {
      yield put(
        loggedIn({
          token: error.response.data.token,
          refreshToken: error.response.data.refreshToken,
        })
      );
    }
    yield put(failed(error.response.data.error as string));
  }
}

function* fetchSong() {
  yield takeEvery("songList/fetchSongs", tryFetch);
}

export default fetchSong;
