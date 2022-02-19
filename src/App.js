import React, { useEffect, useState } from "react";
import StoreProvider from "./core/redux/StoreProvider";
import BrandingScreen from "./components/BrandingScreen";
import { rootRoutes } from "./routes/routes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [appLoading, setApploading] = useState(false);

  useEffect(() => {
    let loaderId = setTimeout(() => {
      setApploading(false);
    }, 1000);

    return () => {
      clearTimeout(loaderId);
    };
  }, []);
  return (
    <>
      {appLoading ? (
        <BrandingScreen />
      ) : (
        <StoreProvider>
          <BrowserRouter>
            <Routes>
              {rootRoutes.map((route, key) => {
                return <Route key={key} path={route.path} element={route.component} />;
              })}
              <Route path="/*" element={<Navigate to={"/home"} />} />
            </Routes>
          </BrowserRouter>
        </StoreProvider>
      )}
    </>
  );
};

export default App;
