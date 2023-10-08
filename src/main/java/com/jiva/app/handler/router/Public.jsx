import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { INDEX_ROUTE } from "./routeUrl";

export default function PublicRoute({ unauthenticate, children }) {
  const { isAuthenticate } = useSelector((state) => ({
    isAuthenticate: state.auth.isAuthenticate,
  }));

  let location = useLocation();

  if (isAuthenticate && unauthenticate) {
    // Redirect them to the /login page, but save the current loca  tion they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={INDEX_ROUTE} state={{ from: location }} replace />;
  }

  return children;
}
