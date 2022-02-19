import React from "react";
import Navbar from "../Navbar";

const NavProvider = (props) => {
  const navbarHeight = 60;

  return (
    <div style={{ position: "absolute" }}>
      <Navbar />
      <div style={{ marginTop: navbarHeight }}>{props.children}</div>
    </div>
  );
};

export default NavProvider;
