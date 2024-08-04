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
import addSongSlice, { AddSong } from "../features/AddSong";
import userProfileSlice, { ProfileUpdate } from "../features/userProfileSlice";
import getUserProfileSlice, {
  UserProfile,
} from "../features/getUserProfileSlice";
import statisticsSlice, { StatisticsState } from "../features/statisticsSlice";

export interface RootState {
  auth: Authenticated;
  createAccount: CreateAccount;
  page: Page;
  player: Player;
  songList: AllSong;
  favouriteList: AllSong;
  makeFavourite: Loading;
  addSong: AddSong;
  profileUpdate: ProfileUpdate;
  getUserProfile: UserProfile;
  statistics: StatisticsState;
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
    addSong: addSongSlice,
    profileUpdate: userProfileSlice,
    getUserProfile: getUserProfileSlice,
    statistics: statisticsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
