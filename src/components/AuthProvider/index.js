import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { routeNames } from "../../routes/routes";

const AuthProvider = ({ component, routeName }) => {
  const auth = useSelector((store) => store.auth);

  if (!auth.isAuthenticated) {
    if (![routeNames.login, routeNames.signup].includes(routeName)) {
      return <Navigate to="/login" />;
    }
  } else {
    if (auth.phoneVerified) {
      if ([routeNames.login, routeNames.signup, routeNames.otpLogin].includes(routeName)) {
        return <Navigate to="/" />;
      }
    } else {
      if (routeName !== routeNames.otpLogin) return <Navigate to="/otp-login" />;
    }
  }

  return component;
};

export default AuthProvider;
