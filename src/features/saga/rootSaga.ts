import { all, fork } from "redux-saga/effects";
import auth from "./authSaga";
import createAccount from "./createAccountSaga";
import fetchSong from "./fetchSongSaga";

function* rootSaga() {
  yield all([fork(auth), fork(createAccount), fork(fetchSong)]);
}

export default rootSaga;
