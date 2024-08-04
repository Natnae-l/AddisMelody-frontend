import { all, fork } from "redux-saga/effects";
import auth from "./authSaga";
import createAccount from "./createAccountSaga";
import fetchSong from "./fetchSongSaga";
import fetchFavourite from "./fetchFavourite";
import setFavourite from "./makeFavourite";
import getStatistics from "./statistics";
import getNotification from "./notificationSaga";

function* rootSaga() {
  yield all([
    fork(auth),
    fork(createAccount),
    fork(fetchSong),
    fork(fetchFavourite),
    fork(setFavourite),
    fork(getStatistics),
    fork(getNotification),
  ]);
}

export default rootSaga;
