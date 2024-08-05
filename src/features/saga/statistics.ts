import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  StatisticsState,
  failed,
  getStatstics,
  success,
} from "../statisticsSlice";

function* tryFetch() {
  try {
    const response: StatisticsState = yield call(() =>
      axios
        .get(import.meta.env.VITE_GET_STATS, {
          withCredentials: true,
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => response.data)
    );

    yield put(success(response));
  } catch (error: any) {
    yield put(failed(error.response.data.message || "Something went wrong"));
  }
}

function* getStatistics() {
  yield takeEvery(getStatstics.type, tryFetch);
}

export default getStatistics;
