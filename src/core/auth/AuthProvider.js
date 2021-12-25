import React, { useEffect, useState } from "react";
import { Route, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

export const auths = {
    admin: "admin",
    user: "user",
    premiumUser: "premiumUser",
    guest: "guest",
    all: ["admin", "user", "guest"],
};

const AuthProvider = (props) => {
    const { path, routeName, allowedUsers, children, routeChildComponents } = props;
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const location = useLocation();

    const [redirectRoute, setRedirectRoute] = useState(null);

    const redirect = () => {
        navigate(redirectRoute);
    };

    const resolveAuthBasedRouting = () => {
        console.log(location);

        if (!allowedUsers.includes(auth.userRole)) {
            if (auth.userRole === auths.user || auth.userRole === auths.premiumUser) {
                setRedirectRoute("/");
            }
            if (auth.userRole === auths.admin) {
                setRedirectRoute("/dashboard");
            }
            if (auth.userRole === auths.guest) {
                setRedirectRoute("/login");
            }
        } else {
            setRedirectRoute(location.pathname);
        }
    };

    // Set page title according to routeName
    useEffect(() => {
        document.title = `Thengs-${routeName}`;
    }, [routeName]);

    // Redirect client to correct path when ready
    useEffect(() => {
        console.log("RR: ", redirectRoute);
        if (redirectRoute) {
            redirect();
        }
    }, [redirectRoute]);

    useEffect(() => {
        resolveAuthBasedRouting();
    }, [auth]);

    return (
        <>
            {Boolean(redirectRoute) && children}
            <Outlet />
        </>
    );
};

export default AuthProvider;
