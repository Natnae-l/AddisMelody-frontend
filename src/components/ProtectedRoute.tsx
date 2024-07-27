import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/store";

const ProtectedRoute = () => {
  const authState = useSelector((state: RootState) => state.auth);
  if (!authState.authenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
