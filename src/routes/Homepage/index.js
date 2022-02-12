import React from "react";
import { useDispatch } from "react-redux";

import { authAction } from "../../core/redux/Auth/AuthSlice";

const Homepage = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(authAction.logout());
  };

  return (
    <div>
      USER HOMEPAGE
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Homepage;
