import React, { useState } from "react";

import ThemeProvider from "./core/theme";
import "./app.scss";
import ThemeSampler from "./components/ThemeSampler";

const App = () => {
    return (
        <ThemeProvider>
            <ThemeSampler />
        </ThemeProvider>
    );
};

export default App;
