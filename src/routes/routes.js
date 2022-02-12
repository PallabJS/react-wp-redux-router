import React from "react";

import AuthProvider from "../components/AuthProvider";

import Homepage from "./Homepage";
import Login from "./Login";
import OtpLogin from "./OtpLogin";
import Signup from "./Signup";

export const routeNames = {
  login: "Login",
  signup: "Signup",
  homepage: "Homepage",
  otpLogin: "Otp-Login",
};

export const rootRoutes = [
  {
    name: routeNames.homepage,
    path: "/",
    component: <AuthProvider routeName={routeNames.homepage} component={<Homepage />} />,
  },
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
];
