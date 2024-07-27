import { configureStore } from "@reduxjs/toolkit";
import authenticatedSlice, {
  Authenticated,
} from "../features/authenticatedSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../features/saga/rootSaga";
import createAccountSlice, {
  CreateAccount,
} from "../features/createAccountSlice";

export interface RootState {
  auth: Authenticated;
  createAccount: CreateAccount;
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authenticatedSlice,
    createAccount: createAccountSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
