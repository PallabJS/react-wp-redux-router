import React from "react";

import AuthProvider from "../components/AuthProvider";
import NavProvider from "../components/NavProvider";

import PublicHome from "./PublicHome";
import Login from "./Login";
import OtpLogin from "./OtpLogin";
import Signup from "./Signup";
import Home from "./Home";

export const routeNames = {
  login: "Login",
  signup: "Signup",
  homepage: "Homepage",
  homepage_unauthorized: "Home",
  otpLogin: "Otp-Login",
};

export const rootRoutes = [
  {
    name: routeNames.login,
    path: "/login",
    component: <AuthProvider routeName={routeNames.login} component={<Login />} />,
  },
  {
    name: routeNames.signup,
    path: "/signup",
    component: <AuthProvider routeName={routeNames.signup} component={<Signup />} />,
  },
  {
    name: routeNames.otpLogin,
    path: "/otp-login",
    component: <AuthProvider routeName={routeNames.otpLogin} component={<OtpLogin />} />,
  },
  {
    name: routeNames.homepage_unauthorized,
    path: "/home",
    component: (
      <AuthProvider routeName={routeNames.homepage_unauthorized} component={<PublicHome />} />
    ),
  },
  {
    name: routeNames.homepage,
    path: "/",
    component: (
      <AuthProvider
        routeName={routeNames.homepage}
        component={
          <NavProvider>
            <Home />
          </NavProvider>
        }
      />
    ),
  },
];
