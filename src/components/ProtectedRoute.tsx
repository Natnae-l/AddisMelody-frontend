import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/store";
import { useEffect } from "react";
import {
  getNotifications,
  pushNotification,
} from "../features/notificationSlice";
import { fetchSongs, pushSong as pushOnSong } from "../features/getSongSlice";
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
    ev = new EventSource("http://localhost:3000/notification", {
      withCredentials: true,
    });

    ev.onmessage = (message) => {
      console.log(message);
      if (message.type == "notification") {
        dispatch(pushNotification(message.data));
      } else if (message.type == "songs") {
        dispatch(pushOnSong(message.data));
      } else if (message.type == "statistics") {
        dispatch(success(message.data));
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
