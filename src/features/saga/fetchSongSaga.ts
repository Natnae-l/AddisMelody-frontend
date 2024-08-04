import { call, put, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Song, failed, success } from "../getSongSlice";

export interface FetchSong {
  genre?: string;
  page?: number;
}

export interface ResponseData {
  songs: Song[];
  count: number;
}
function* tryFetch(action: PayloadAction<FetchSong>) {
  try {
    const response: ResponseData = yield call(
      () =>
        axios
          .get(`https://addismelody-backend.onrender.com/songs/list`, {
            params: {
              page: action.payload.page || 0,
              genre: action.payload.genre,
            },
            withCredentials: true, // Include credentials in the request
            headers: {
              Accept: "application/json",
            },
          })
          .then((response) => response.data) // Extract the data from the response
    );

    yield put(success(response.songs));
  } catch (error: any) {
    console.log(error);

    yield put(failed(error.response.data.error as string));
  }
}

function* fetchSong() {
  yield takeEvery("songList/fetchSongs", tryFetch);
}

export default fetchSong;
