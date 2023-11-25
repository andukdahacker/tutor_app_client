import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import FindPage from "./FindPage";
import LandingPage from "./LandingPage";
import ProfilePage from "./ProfilePage";
import Root from "./Root";

export const RoutesPath = {
  root: "/",
  findPage: "find",
  profilePage: "profile/:profileId",
};

export const router = createBrowserRouter([
  {
    path: RoutesPath.root,
    element: <Root />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: RoutesPath.findPage,
        element: <FindPage />,
      },
      {
        path: RoutesPath.profilePage,
        element: <ProfilePage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
