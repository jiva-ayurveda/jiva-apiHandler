import FeedPage from "pages/home/feed";
import PageNotFound from "pages/other/PageNotFound";
import { WILDCARD_PARAMS } from "router/routeUrl";

export const homeRoutelist = () => {
  return [
    {
      id: "1",
      element: FeedPage,
      props: {
        index: true,
      },
    },
    {
      id: "2",
      element: PageNotFound,
      authRequired: true,
      props: {
        path: WILDCARD_PARAMS,
      },
    },
  ];
};
