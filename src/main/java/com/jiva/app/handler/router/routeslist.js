import PageNotFound from "pages/other/PageNotFound";
import { lazy } from "react";
import Loadable from "./Loadable";
import * as urlRoutes from "./routeUrl";

const HomePage = Loadable(lazy(() => import("pages/home")));
const ProfilePage = Loadable(lazy(() => import("pages/profile")));
const SignInPage = Loadable(lazy(() => import("pages/auth/signin")));
const SignUpPage = Loadable(lazy(() => import("pages/auth/signup")));
const ForgotPasswordPage = Loadable(
  lazy(() => import("pages/auth/forgotpassword"))
);
const TermsAndConditionPage = Loadable(
  lazy(() => import("pages/company/TermsAndCondition"))
);

const routes = [
  {
    path: urlRoutes.auth_route.LOGIN,
    element: SignInPage,
    unauthenticate: true,
  },
  {
    path: urlRoutes.auth_route.SIGNUP,
    element: SignUpPage,
    unauthenticate: true,
  },
  {
    path: urlRoutes.auth_route.FORGOT_PASSWORD,
    element: ForgotPasswordPage,
    unauthenticate: true,
  },
  {
    path: urlRoutes.company_route.TERM_AND_CONDITION,
    element: TermsAndConditionPage,
    unauthenticate: true,
  },
  {
    path: urlRoutes.profile_route.PROFILE + "/" + urlRoutes.ID_ROUTE_PARAMS,
    element: ProfilePage,
  },
  {
    path: urlRoutes.INDEX_ROUTE + urlRoutes.WILDCARD_PARAMS,
    element: HomePage,
  },
  {
    path: urlRoutes.WILDCARD_PARAMS,
    element: PageNotFound,
  },
];

export default routes;
