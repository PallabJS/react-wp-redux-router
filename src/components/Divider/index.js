import React from "react";

const Divider = ({ hSpace = 1, vSpace = 1, lineWidth = 1, color = "black" }) => {
  return (
    <div
      style={{
        height: lineWidth,
        margin: `${vSpace}px ${hSpace}px`,
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Divider;
