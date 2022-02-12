import { createSlice } from "@reduxjs/toolkit";

export const userRoles = {
  guest: "guest",
  user: "user",
};

const initialState = {
  userRole: "guest",
  isAuthenticated: false,
  token: null,
  phoneVerified: false,
  emailVerified: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, { payload }) => {
      return payload;
    },
    verifyUser: (state, action) => {
      state.phoneVerified = action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const authAction = AuthSlice.actions;

export default AuthSlice.reducer;
