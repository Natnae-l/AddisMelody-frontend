import { call, put, select, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  StatisticsState,
  failed,
  getStatstics,
  success,
} from "../statisticsSlice";
import { Token, loggedIn } from "../authenticatedSlice";
import { getToken } from "./fetchSongSaga";
import { RootState } from "../../app/store";

function* tryFetch() {
  try {
    let token: Token = yield select((state: RootState) => getToken(state));

    const response: StatisticsState = yield call(() =>
      axios
        .get(`http://localhost:3000/songs/statistics`, {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${JSON.stringify(token)}`,
          },
        })
        .then((response) => response.data)
    );

    yield put(success(response));
    if (response.token && response.refreshToken) {
      yield put(
        loggedIn({ token: response.token, refreshToken: response.refreshToken })
      );
    }
  } catch (error: any) {
    const { token, refreshToken } = error.response.data;

    if (token && refreshToken) {
      yield put(loggedIn({ token, refreshToken }));
    }
    yield put(failed(error.response.data.message || "Something went wrong"));
  }
}

function* getStatistics() {
  yield takeEvery(getStatstics.type, tryFetch);
}

export default getStatistics;
