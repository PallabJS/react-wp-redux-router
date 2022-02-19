import { faBars, faColumns, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { authAction } from "../../core/redux/Auth/AuthSlice";
import { useCoreStyle } from "../../core/styles/style.container";
import { useStyle } from "./style";

const navList = [
  { name: "Home", path: "/", action: null },
  { name: "My Orders", path: "/orders", action: null },
  { name: "Call query", path: "/customer-support", action: null },
  { name: "Account", path: "/account", action: null },
  {
    name: "Logout",
    path: "/",
    action: authAction.logout,
  },
];

const Navbar = () => {
  const coreStyle = useCoreStyle();
  const style = useStyle();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);

  const toggleNav = () => {
    setOpen((open) => !open);
  };

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  return (
    <>
      <div className={style.container}>
        <header className={style.navbar}>
          <img src="./images/homico-pack.png" width={120} height="auto" />
          <FontAwesomeIcon
            icon={faBars}
            size={"2x"}
            style={{ marginLeft: "auto" }}
            onClick={toggleNav}
          />
        </header>
      </div>
      <div className={style.navContent + " " + (open && style.slideAnimate)}>
        {navList.map((item, index) => {
          return (
            <div key={index} className={style.navItem + " " + coreStyle.Box}>
              <span
                onClick={() => {
                  if (item.action) dispatch(item.action());
                  else navigate(item.path);
                  toggleNav();
                }}
              >
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
