import { put, call, takeEvery, select } from "redux-saga/effects";
import {
  MakeFavouritePayload,
  done,
  failed,
  makeFavourite,
} from "../makeFavouriteSlice";
import { RootState } from "../../app/store";
import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { AllSong, Song } from "../getSongSlice";
import { success } from "../favouriteSlice";

function* tryMake(action: PayloadAction<MakeFavouritePayload>) {
  try {
    let favourites: AllSong = yield select((state: RootState) =>
      getFavourites(state)
    );

    yield call(() =>
      axios
        .patch(
          `https://addismelody-backend.onrender.com/songs/favourite/${action.payload.id}`,
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

    let id = action.payload.id;
    const exists = favourites.songs.findIndex((song) => song._id == id);

    if (exists == -1) {
      alert("song toogled successfully");
    }
    const data = removeExistingSong(id, favourites);

    if (data) {
      yield put(success(data));
    }
  } catch (error: any) {
    console.log(error);

    yield put(failed());
  }
}

function* setFavourite() {
  yield takeEvery(makeFavourite.type, tryMake);
}

function removeExistingSong(
  id: string,
  favourites: AllSong
): undefined | Song[] {
  let favouritesData = favourites.songs.filter((song) => song._id != id);

  return favouritesData;
}
const getFavourites = (state: RootState): AllSong => state.favouriteList;
export default setFavourite;
