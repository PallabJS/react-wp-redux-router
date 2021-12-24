import React, { useEffect } from "react";

export const auths = {
    admin: "admin",
    user: "user",
    guest: "guest",
    all: ["admin", "user", "guest"],
};

const AuthProvider = (props) => {
    const { routeName, auth, children } = props;

    console.log(routeName, auth);

    // HANDLE AUTHENTICATION AND REDIRECTION HERE

    useEffect(() => {
        document.title = `Thengs-${routeName}`;
    }, [routeName]);

    return children;
};

export default AuthProvider;
