import axios, { AxiosResponse } from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { failed, fetchFavourites, success } from "../favouriteSlice";
import { getToken } from "./fetchSongSaga";
import { RootState } from "../../app/store";
import { Token, loggedIn } from "../authenticatedSlice";

function* tryFetch() {
  try {
    let token: Token = yield select((state: RootState) => getToken(state));

    const response: AxiosResponse = yield call(() =>
      axios
        .get(`http://localhost:3000/songs/favourites`, {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${JSON.stringify(token)}`,
          },
        })
        .then((response) => response.data)
    );
    console.log(response.data);
    yield put(success(response.data));
    if (response.data.token && response.data.refreshToken) {
      yield put(
        loggedIn({
          token: response.data.token,
          refreshToken: response.data.refreshToken,
        })
      );
    }
  } catch (error: any) {
    yield put(failed(error.response.data.error as string));
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

function* fetchFavourite() {
  yield takeEvery(fetchFavourites.type, tryFetch);
}

export default fetchFavourite;
