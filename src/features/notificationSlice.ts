import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Notification from "../components/home/Notification";

export interface Notification {
  _id: string;
  to: string;
  title: string;
  body: string;
  time: number;
  read: boolean;
}

export interface NotificationState {
  isLoading: boolean;
  notifications: Notification[];
  error: string;
}

const initialState: NotificationState = {
  isLoading: false,
  notifications: [],
  error: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    getNotifications: (state: NotificationState) => {
      state.isLoading = true;
    },
    success: (
      state: NotificationState,
      action: PayloadAction<Notification[]>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.notifications = action.payload;
    },
    failed: (state: NotificationState, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    pushNotification: (
      state: NotificationState,
      action: PayloadAction<Notification>
    ) => {
      state.isLoading = false;
      state.error = "";
      state.notifications = [action.payload, ...state.notifications];
    },
  },
});

export default notificationSlice.reducer;
export const { getNotifications, success, failed, pushNotification } =
  notificationSlice.actions;
