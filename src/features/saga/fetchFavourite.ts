import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { failed, fetchFavourites, success } from "../favouriteSlice";

function* tryFetch() {
  try {
    const response: AxiosResponse = yield call(() =>
      axios
        .get(`https://addismelody-backend.onrender.com/songs/favourites`, {
          withCredentials: true,
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => response.data)
    );
    console.log(response.data);
    yield put(success(response.data));
  } catch (error: any) {
    yield put(failed(error.response.data.error as string));
  }
}

function* fetchFavourite() {
  yield takeEvery(fetchFavourites.type, tryFetch);
}

export default fetchFavourite;
