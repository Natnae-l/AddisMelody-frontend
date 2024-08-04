import { put, takeEvery } from "redux-saga/effects";
import {
  Notification,
  failed,
  getNotifications,
  success,
} from "../notificationSlice";
import axios, { AxiosResponse } from "axios";

function* tryFetch() {
  try {
    const response: AxiosResponse = yield axios.get(
      "https://addismelody-backend.onrender.com/notification/list",
      {
        withCredentials: true,
        headers: {
          Accept: "application/json",
        },
      }
    );

    let data: Notification[] = response.data.data;

    yield put(success(data));
  } catch (error: any) {
    yield put(failed(error.response.data.message || "Something went wrong"));
  }
}
function* getNotification() {
  yield takeEvery(getNotifications.type, tryFetch);
}

export default getNotification;
