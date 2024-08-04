import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/store";
import { useEffect } from "react";
import { getNotifications } from "../features/notificationSlice";
import { fetchSongs } from "../features/getSongSlice";
import { getStatstics } from "../features/statisticsSlice";
import { fetchFavourites } from "../features/favouriteSlice";

const ProtectedRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs({}));
    dispatch(fetchFavourites());
    dispatch(getNotifications());
    dispatch(getStatstics());
  }, []);

  const authState = useSelector((state: RootState) => state.auth);
  if (!authState.authenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
