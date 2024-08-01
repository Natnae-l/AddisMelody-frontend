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
import favouriteSlice from "../features/favouriteSlice";
import makeFavouriteSlice, { Loading } from "../features/makeFavouriteSlice";

export interface RootState {
  auth: Authenticated;
  createAccount: CreateAccount;
  page: Page;
  player: Player;
  songList: AllSong;
  favouriteList: AllSong;
  makeFavourite: Loading;
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    page: pageSlice,
    auth: authenticatedSlice,
    createAccount: createAccountSlice,
    player: musicPlayerSlice,
    songList: getSongSlice,
    favouriteList: favouriteSlice,
    makeFavourite: makeFavouriteSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
