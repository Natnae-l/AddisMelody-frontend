import { call, takeEvery } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

export interface FetchSong {
  genre?: string;
  page?: number;
}

interface Song {
  id: string;
  title: string;
  genre: string;
}

interface ResponseData {
  songs: Song[];
  total: number;
}

function* tryFetch(action: PayloadAction<FetchSong>) {
  try {
    console.log("heres");

    const response: ResponseData = yield call(() =>
      fetch(
        `https://addismelody-backend.onrender.com/songs/list?page=${
          action.payload.page || 0
        }&genre=${action.payload.genre}`,
        {
          method: "GET",
          credentials: "include", // This ensures cookies are included
        }
      ).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function* fetchSong() {
  yield takeEvery("songList/fetchSongs", tryFetch);
}

export default fetchSong;
