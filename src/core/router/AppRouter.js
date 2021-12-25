import React, { Children } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthProvider, { auths } from "../auth/AuthProvider";
import PageAccessWrapper from "../auth/PageAccessWrapper";

import { routes } from "./routes";

const AppRouter = () => {
    const auth = useSelector((state) => state.auth);

    return (
        <Router>
            <Routes>
                {routes.map((route, id) => {
                    return (
                        <Route
                            key={id}
                            path={route.path}
                            element={
                                <AuthProvider
                                    routeName={route.name}
                                    allowedUsers={route.allowedUsers}
                                    path={route.path}
                                    routeChildComponents={route.children}
                                >
                                    {route.component}
                                </AuthProvider>
                            }
                        >
                            {route.children.map((childRoute, routeId) => {
                                return (
                                    <Route
                                        key={routeId}
                                        path={childRoute.path}
                                        element={
                                            <PageAccessWrapper
                                                pageName={childRoute.name}
                                                allowedUsers={childRoute.allowedUsers}
                                            >
                                                {childRoute.component}
                                            </PageAccessWrapper>
                                        }
                                    />
                                );
                            })}
                        </Route>
                    );
                })}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
