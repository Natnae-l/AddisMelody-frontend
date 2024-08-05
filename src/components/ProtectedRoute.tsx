import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/store";
import { useEffect } from "react";
import {
  getNotifications,
  pushNotification,
} from "../features/notificationSlice";
import { fetchSongs } from "../features/getSongSlice";
import { getStatstics, success } from "../features/statisticsSlice";
import { fetchFavourites } from "../features/favouriteSlice";

const ProtectedRoute = () => {
  let ev: EventSource;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs({}));
    dispatch(fetchFavourites());
    dispatch(getNotifications());
    dispatch(getStatstics());
  }, []);

  useEffect(() => {
    ev = new EventSource(
      "https://addismelody-backend.onrender.com/notification",
      {
        withCredentials: true,
      }
    );

    ev.onmessage = (message) => {
      const newMessage = JSON.parse(message.data);
      console.log("new message", newMessage);
      if (newMessage.type == "notification") {
        dispatch(pushNotification(newMessage.data));
      } else if (newMessage.type == "statistics") {
        dispatch(success(newMessage.data));
      }
    };

    return () => {
      ev.close();
    };
  }, []);

  const authState = useSelector((state: RootState) => state.auth);
  if (!authState.authenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
