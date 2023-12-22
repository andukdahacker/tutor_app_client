import { createBrowserRouter } from "react-router-dom";

import { AuthProvider } from "../features/auth/components/context/AuthProvider";
import { FindProvider } from "../features/find/components/context/FindProvider";
import ProfileProvider from "../features/profile/context/profile_provider";
import ErrorPage from "./ErrorPage";
import FindPage from "./FindPage";
import LandingPage from "./LandingPage";
import ProfilePage from "./ProfilePage";
import Root from "./Root";

export const RoutesPath = {
  root: "/",
  findPage: "find",
  profilePage: "profile/:userId",
};

export const router = createBrowserRouter([
  {
    path: RoutesPath.root,
    element: (
      <AuthProvider>
        <Root />
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: RoutesPath.findPage,
        element: (
          <FindProvider>
            <FindPage />
          </FindProvider>
        ),
      },
      {
        path: RoutesPath.profilePage,
        element: (
          <ProfileProvider>
            <ProfilePage />
          </ProfileProvider>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
