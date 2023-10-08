import RootErrorBoundary from "errorboundary/RouteError";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Private";
import PublicRoute from "./Public";

const ChildRoute = ({ routeslist }) => {
  return (
    <>
      <Routes>
        {routeslist.map((route) => {
          const { id, authRequired, element: Component } = route;
          return (
            <Route
              key={id}
              errorElement={<RootErrorBoundary />}
              element={
                authRequired ? (
                  // Protected Route
                  <PrivateRoute>
                    <Component />
                  </PrivateRoute>
                ) : (
                  // Public Route
                  <PublicRoute>
                    <Component />
                  </PublicRoute>
                )
              }
              {...route.props}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default ChildRoute;
