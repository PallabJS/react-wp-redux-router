import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../../core/redux/Auth/AuthSlice";

const Login = () => {
    const dispatch = useDispatch();

    const login = () => {
        dispatch(authAction.login({ userRole: "premiumUser", isAuthenticated: true }));
    };
    const adminLogin = () => {
        dispatch(authAction.login({ userRole: "admin", isAuthenticated: true }));
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={login}>
                User Login
            </Button>
            <Button variant="contained" color="primary" onClick={adminLogin}>
                Admin Login
            </Button>
        </div>
    );
};

export default Login;
