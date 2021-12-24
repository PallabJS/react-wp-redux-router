import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider from "../auth";

import { routes } from "./routes";

const index = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<div>HOME</div>} />

                {routes.map((route, id) => {
                    return (
                        <Route
                            key={id}
                            path={route.path}
                            element={
                                <AuthProvider routeName={route.name} auth={route.auth}>
                                    {route.component}
                                </AuthProvider>
                            }
                        />
                    );
                })}

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default index;
