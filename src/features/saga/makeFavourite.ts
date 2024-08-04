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
import { AllSong, Song } from "../getSongSlice";
import { success } from "../favouriteSlice";

function* tryMake(action: PayloadAction<MakeFavouritePayload>) {
  try {
    let token: Token = yield select((state: RootState) => getToken(state));
    let favourites: AllSong = yield select((state: RootState) =>
      getFavourites(state)
    );

    const response: Token = yield call(
      () =>
        axios
          .patch(
            `https://addismelody-backend.onrender.com/songs/favourite/${action.payload.id}`,
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

    let id = action.payload.id;
    const exists = favourites.songs.findIndex((song) => song._id == id);

    if (exists == -1) {
      alert("song toogled successfully");
    }
    const data = removeExistingSong(id, favourites);

    if (data) {
      yield put(success(data));
    }

    if (response.token && response.refreshToken) {
      yield put(
        loggedIn({ token: response.token, refreshToken: response.refreshToken })
      );
    }
  } catch (error: any) {
    console.log(error);

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

function removeExistingSong(
  id: string,
  favourites: AllSong
): undefined | Song[] {
  let favouritesData = favourites.songs.filter((song) => song._id != id);

  return favouritesData;
}
const getFavourites = (state: RootState): AllSong => state.favouriteList;
export default setFavourite;
