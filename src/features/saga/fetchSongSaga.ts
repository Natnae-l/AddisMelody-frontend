import { call, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

export interface FetchSong {
  genre?: string;
  page?: number;
}

function* tryFetch(action: PayloadAction<FetchSong>) {
  try {
    console.log("heres");

    const response: AxiosResponse = yield call(() =>
      axios.get(
        `https://addismelody-backend.onrender.com/songs/list?page=${
          action.payload.page || 0
        }&genre=${action.payload.genre}`,
        { withCredentials: true }
      )
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

function* fetchSong() {
  yield takeEvery("songList/fetchSongs", tryFetch);
}

export default fetchSong;
