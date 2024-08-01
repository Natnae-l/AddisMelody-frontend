import { configureStore } from "@reduxjs/toolkit";
import authenticatedSlice, {
  Authenticated,
} from "../features/authenticatedSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../features/saga/rootSaga";
import createAccountSlice, {
  CreateAccount,
} from "../features/createAccountSlice";
import pageSlice, { Page } from "../features/pageSlice";
import musicPlayerSlice, { Player } from "../features/musicPlayerSlice";
import getSongSlice, { AllSong } from "../features/getSongSlice";

export interface RootState {
  auth: Authenticated;
  createAccount: CreateAccount;
  page: Page;
  player: Player;
  songList: AllSong;
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    page: pageSlice,
    auth: authenticatedSlice,
    createAccount: createAccountSlice,
    player: musicPlayerSlice,
    songList: getSongSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
