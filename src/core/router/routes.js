import React from "react";
import { Navigate } from "react-router-dom";

import { auths } from "../auth/index";

import CryptoStats from "../../wazir/CryptoStats";

export const routes = [
    {
        name: "myCyptoStats",
        path: "/mcs",
        auth: auths.all,
        component: <CryptoStats />,
    },
];
