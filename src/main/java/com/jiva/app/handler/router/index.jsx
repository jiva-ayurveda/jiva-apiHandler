import Fallback from "components/loaders/AppWatermark";
import RootErrorBoundary from "errorboundary/RouteError";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Base from "./Base";
import PrivateRoute from "./Private";
import PublicRoute from "./Public";
import routeslist from "./routeslist";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routeslist.map((route) => {
        const { path, authRequired, element: Component } = route;
        return (
          <Route
            {...route}
            key={path}
            path={path}
            errorElement={<RootErrorBoundary />}
            element={
              authRequired ? (
                // Protected Route
                <PrivateRoute>
                  <Base>
                    <Component />
                  </Base>
                </PrivateRoute>
              ) : (
                // Public Route
                <PublicRoute unauthenticate={route.unauthenticate}>
                  <Base>
                    <Component />
                  </Base>
                </PublicRoute>
              )
            }
          />
        );
      })}
    </>
  )
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function Router() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />;
}
