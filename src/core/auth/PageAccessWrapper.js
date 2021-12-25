import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import FeatureLocked from "../../components/Misc/FeatureLocked";
import { authAction } from "../redux/Auth/AuthSlice";
import { auths } from "./AuthProvider";

const PageAccessWrapper = (props) => {
    const { pageName, allowedUsers, children } = props;
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    useEffect(() => {
        // Make an API call below to verify userRole

        let user = { userRole: "user" };
        if (user.userRole !== auth.userRole) {
            setTimeout(() => {
                // dispatch(authAction.logout());
                setShow(true);
            }, 500);
        }
    }, []);

    if (!show) return null;

    if (allowedUsers.includes(auths.user) || allowedUsers.includes(auth.userRole)) {
        return children;
    } else {
        return <FeatureLocked pageName={pageName} />;
    }
};

export default PageAccessWrapper;
