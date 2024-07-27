import { all, fork } from "redux-saga/effects";
import auth from "./authSaga";
import createAccount from "./createAccountSaga";

function* rootSaga() {
  yield all([fork(auth), fork(createAccount)]);
}

export default rootSaga;
