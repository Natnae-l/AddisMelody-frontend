import { put, call, takeEvery, select } from "redux-saga/effects";
import {
  MakeFavouritePayload,
  done,
  failed,
  makeFavourite,
} from "../makeFavouriteSlice";
import { RootState } from "../../app/store";
import axios, { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { AllSong, Song } from "../getSongSlice";
import { pushSong, success } from "../favouriteSlice";

function* tryMake(action: PayloadAction<MakeFavouritePayload>) {
  try {
    const favourites: AllSong = yield select(
      (state: RootState) => state.favouriteList
    );

    const newData: AxiosResponse = yield call(() =>
      axios
        .patch(
          `${import.meta.env.VITE_TOGGLE_FAV}/${action.payload.id}`,
          {},
          {
            withCredentials: true,
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((response) => response.data)
    );

    yield put(done());

    const id = action.payload.id;
    const exists = favourites.songs.findIndex((song) => song._id === id);

    if (exists === -1) {
      yield put(pushSong(newData.data));
      alert("Song toggled successfully");
    }

    const updatedSongs = removeExistingSong(id, favourites);

    if (updatedSongs) {
      yield put(success(updatedSongs));
    }
  } catch (error: any) {
    console.error(error);
    yield put(failed(error.message));
  }
}

function* setFavourite() {
  yield takeEvery(makeFavourite.type, tryMake);
}

function removeExistingSong(id: string, favourites: AllSong): Song[] {
  return favourites.songs.filter((song) => song._id !== id);
}

export default setFavourite;
