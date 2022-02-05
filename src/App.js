import React, { useState } from "react";

import StoreProvider from "./core/redux/StoreProvider";
import ThemeProvider from "./core/theme";
import "./app.scss";

import AppRouter from "./core/router/AppRouter";

const App = () => {
    return (
        <StoreProvider>
            <ThemeProvider>
                <AppRouter />
                asd
            </ThemeProvider>
        </StoreProvider>
    );
};

export default App;
