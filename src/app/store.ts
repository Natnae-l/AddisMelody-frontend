import { configureStore } from "@reduxjs/toolkit";
import authenticatedSlice, {
  Authenticated,
} from "../features/authenticatedSlice";
import createSagaMiddleware from "redux-saga";
import authSaga from "../features/saga/authSaga";

export interface RootState {
  auth: Authenticated;
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authenticatedSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(authSaga);

export default store;
