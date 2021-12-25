import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

import { authAction } from "../../core/redux/Auth/AuthSlice";

const Dashboard = () => {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(authAction.logout());
    };

    return (
        <div>
            ADMIN DASHBOARD
            <Button variant="contained" color="secondary" onClick={logout}>
                Logout
            </Button>
        </div>
    );
};

export default Dashboard;
