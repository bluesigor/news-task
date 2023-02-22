import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const RequireAuth = () => {
  const location = useLocation();
  const { isLoggedIn } = useSelector((state: RootState) => state.login);

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuth;
