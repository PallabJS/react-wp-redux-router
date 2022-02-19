import { createUseStyles } from "react-jss";
import { coreColor, coreStyle } from "../../core/styles/styleDefinition";

export const useStyle = createUseStyles({
  container: {},
  contentWrapper: {
    padding: coreStyle.padding[2],
  },
  pageHeader: {
    padding: coreStyle.padding[1],
    fontSize: coreStyle.fontSize.large,
    backgroundColor: coreColor.god(1, 255),
    marginBottom: coreStyle.margin[1],
  },
  logoHeader: {
    position: "relative",
    minHeight: 150,
    padding: coreStyle.padding[2],
    border: coreStyle.border(0, coreColor.gray(1, 20)),
    borderRadius: coreStyle.borderRadius[2],
    marginBottom: 30,
    "& .header": {
      fontSize: coreStyle.fontSize.large,
      fontWeight: coreStyle.fontWeight[1],
      textAlign: "center",
    },
    "& .text": {
      bottom: 10,
      right: 20,
      position: "absolute",
      fontSize: coreStyle.fontSize.normal,
      fontWeight: coreStyle.fontWeight[1],
    },
  },
  sectionTitle: {
    fontSize: coreStyle.fontSize.normal,
    fontWeight: coreStyle.fontWeight[1],
    marginBottom: 10,
  },
});
