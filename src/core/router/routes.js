import React from "react";

import { auths } from "../auth/AuthProvider";

import Login from "../../components/login/Login";
import Homepage from "../../components/homepage/Homepage";
import Dashboard from "../../components/dashboard/Dashboard";
import Premium from "../../components/premium/Premium";

export const routes = [
    {
        name: "login",
        path: "/login",
        allowedUsers: [auths.guest],
        component: <Login />,
        children: [],
    },
    {
        name: "Home",
        path: "/",
        allowedUsers: [auths.user, auths.premiumUser, auths.admin],
        component: <Homepage />,
        children: [
            {
                name: "Free App",
                path: "/free-app",
                allowedUsers: [auths.user, auths.premiumUser],
                component: <div>THIS IS A FREE APP FOR ALL USERS</div>,
            },
            {
                name: "Weather App",
                path: "/weather-app",
                allowedUsers: [auths.premiumUser, auths.admin],
                component: <Premium />,
            },
        ],
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        allowedUsers: [auths.admin],
        component: <Dashboard />,
        children: [],
    },
];
