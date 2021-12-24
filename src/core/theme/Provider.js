import React, { useState, useEffect } from "react";
import { getTheme } from "./Themes";
import { ThemeProvider } from "@mui/material/styles";

const Provider = (props) => {
    const { children, mode = "light" } = props;

    const [currentTheme, setCurrentTheme] = useState(getTheme("light"));

    const updateTheme = (mode) => {
        let updatedTheme = getTheme(mode);
        setCurrentTheme(updatedTheme);

        console.log(updatedTheme);
    };

    // Update current Theme
    useEffect(() => {
        updateTheme(mode);
    }, [mode]);

    return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default Provider;
