import { all, fork } from "redux-saga/effects";
import auth from "./authSaga";
import createAccount from "./createAccountSaga";
import fetchSong from "./fetchSongSaga";
import fetchFavourite from "./fetchFavourite";
import setFavourite from "./makeFavourite";

function* rootSaga() {
  yield all([
    fork(auth),
    fork(createAccount),
    fork(fetchSong),
    fork(fetchFavourite),
    fork(setFavourite),
  ]);
}

export default rootSaga;
