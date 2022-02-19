import { createUseStyles } from "react-jss";
import { coreColor, coreStyle } from "./styleDefinition";

const rawPresets = {
  buttonRaw: {
    fontSize: coreStyle.fontSize.normal,
    fontWeight: coreStyle.fontWeight[1],
    border: coreStyle.border(1, coreColor.blue(0, 1000000)),
    borderRadius: coreStyle.borderRadius[1],
    padding: coreStyle.padding[0],
  },
};

export const useCoreStyle = createUseStyles({
  bottomMargined5: { display: "block", marginBottom: 5 },
  bottomMargined10: { display: "block", marginBottom: 10 },
  bottomMargined20: { display: "block", marginBottom: 20 },
  Box: {
    padding: coreStyle.padding[2],
    boxShadow: coreStyle.boxShadow[3],
    borderRadius: coreStyle.borderRadius[1],
  },

  BorderLessBox: {
    padding: coreStyle.padding[2],
    borderRadius: coreStyle.borderRadius[1],
  },

  inputGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    padding: coreStyle.padding[1],
    gap: 10,
    "& label": {
      fontSize: coreStyle.fontSize.medium,
      fontWeight: coreStyle.fontWeight[1],
      minWidth: "80px",
    },
    "& input[type='text'], input[type='number'], input[type='password']": {
      fontSize: coreStyle.fontSize.normal,
      fontWeight: coreStyle.fontWeight[1],
      padding: coreStyle.padding[1],
      paddingLeft: 10,
      width: "100%",
      flex: 1,
      border: coreStyle.border(0, coreColor.blue(0.4, 200)),
      borderRadius: coreStyle.borderRadius[1],
    },
    "& input[type='password']": {
      fontSize: 30,
      height: 32,
      paddingBottom: 8,
      letterSpacing: 2,
    },
    "& input[type='button']": {
      fontSize: coreStyle.fontSize.normal,
      fontWeight: coreStyle.fontWeight[1],
    },
  },

  centerItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  buttonRaw: {
    fontSize: coreStyle.fontSize.normal,
    fontWeight: coreStyle.fontWeight[1],
  },

  primaryButton: {
    color: coreColor.god(1),
    backgroundColor: coreColor.blue(1, 250),
    "&:active": {
      backgroundColor: coreColor.blue(1, 100),
    },
    ...rawPresets.buttonRaw,
  },
  secondaryButton: {
    color: coreColor.god(1),
    backgroundColor: coreColor.red(1),
    "&:active": {
      backgroundColor: coreColor.red(1, 100),
    },
    ...rawPresets.buttonRaw,
  },
  infoButton: {
    color: coreColor.god(1),
    backgroundColor: coreColor.gray(1, 150),
    "&:active": {
      backgroundColor: coreColor.gray(1, 200),
    },
    ...rawPresets.buttonRaw,
  },
  primarylinkButton: {
    fontSize: coreStyle.fontSize.normal,
    fontWeight: coreStyle.fontWeight[2],
    color: coreColor.blue(1),
    border: "none",
    backgroundColor: "transparent",
    "&:active": {
      color: coreColor.blue(1, 100),
    },
  },
});
