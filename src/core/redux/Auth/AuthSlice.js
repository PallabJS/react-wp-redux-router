import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userRole: "guest",
    isAuthenticated: false,
};

const AuthSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login: (state, { payload }) => {
            return payload;
        },
        logout: () => {
            return initialState;
        },
    },
});

export const authAction = AuthSlice.actions;

export default AuthSlice.reducer;
