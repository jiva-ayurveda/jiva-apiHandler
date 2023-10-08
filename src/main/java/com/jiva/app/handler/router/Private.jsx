import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, auth_route } from "./routeUrl";

function PrivateRoute({ children }) {
  const { isAuthenticate } = useSelector((state) => ({
    isAuthenticate: state.auth.isAuthenticate,
  }));

  let location = useLocation();

  if (!isAuthenticate) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return (
      <Navigate to={auth_route.LOGIN} state={{ from: location }} replace />
    );
  }

  return children;
}

export default PrivateRoute;
