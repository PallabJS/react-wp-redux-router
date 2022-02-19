import { createUseStyles } from "react-jss";
import { coreColor, coreStyle } from "../../core/styles/styleDefinition";

export const useStyle = createUseStyles({
  container: {
    position: "absolute",
    width: "100%",
    height: "100vh",
  },
  navbar: {
    position: "sticky",
    height: 60,
    zIndex: 2,
    top: 0,
    display: "flex",
    alignItems: "center",
    padding: "0px 20px",
    backgroundColor: coreColor.god(1, 250),
  },
  navContent: {
    position: "absolute",
    marginTop: 60,
    backgroundColor: coreColor.god(1, 255),
    zIndex: 1,
    width: "100%",
    height: "calc(100vh - 50px)",
    left: "-100%",
    transition: "all 0.1s linear",
    overflow: "auto",
    paddingBottom: 300,
  },
  navItem: {
    marginBottom: 2,
    padding: "10px 20px",
    "& span": {
      fontSize: coreStyle.fontSize.normal,
      color: coreColor.blue(1, 100),
      lineHeight: 2,
      fontWeight: coreStyle.fontWeight[2],
    },
  },
  slideAnimate: {
    left: 0,
  },
});
