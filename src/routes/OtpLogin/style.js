import { createUseStyles } from "react-jss";
import { coreStyle } from "../../core/styles/styleDefinition";

export const useStyle = createUseStyles({
  container: {
    height: "100%",
    display: "flex",
    paddingTop: 100,
  },
  header: {
    fontSize: coreStyle.fontSize.large,
    fontWeight: coreStyle.fontWeight[3],
    marginBottom: 10,
  },
  text: {
    fontSize: coreStyle.fontSize.medium,
    fontWeight: coreStyle.fontWeight[1],
    color: coreStyle.textColor.darkShade,
  },
});
