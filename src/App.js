import React, { useState } from "react";

import ThemeProvider from "./core/theme";
import "./app.scss";
import ThemeSampler from "./components/ThemeSampler";

import Router from "./core/router";

const App = () => {
    return (
        <ThemeProvider>
            {/* <ThemeSampler /> */}
            <Router />
        </ThemeProvider>
    );
};

export default App;
