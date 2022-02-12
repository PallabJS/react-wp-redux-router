import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {},
});

let variatorValue = 0.01;

const BrandingScreen = () => {
  const [animStyle, setAnimStyle] = useState({
    opacity: 0.2,
  });

  useEffect(() => {
    let animId = setInterval(() => {
      if (animStyle.opacity >= 1) variatorValue = -0.01;
      if (animStyle.opacity <= 0.2) variatorValue = 0.01;

      let newAnimStyleState = {
        opacity: animStyle.opacity + variatorValue,
      };
      setAnimStyle(newAnimStyleState);
    }, 10);

    return () => {
      clearInterval(animId);
    };
  }, [animStyle]);

  return (
    <div
      style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", ...animStyle }}
    >
      <img style={{ width: "100%", height: "auto" }} src={"./images/homico.png"} />
    </div>
  );
};

export default BrandingScreen;
