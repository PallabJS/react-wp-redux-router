import { createTheme } from "@mui/material/styles";

const getThemeByMode = (mode) => ({
    palette: {
        mode: mode,
        primary: {
            main: "#039be5",
        },
        secondary: {
            main: "#d84315",
        },
        info: {
            main: "#78909c",
            contrastText: "#fff",
        },
        background: {
            paper: mode === "light" ? "#fffff" : "#263238",
        },
    },
    typography: {
        fontSize: 100,
        htmlFontSize: 100,
        h6: { fontSize: "1.4rem" },
        h5: { fontSize: "2rem" },
        h4: { fontSize: "3rem" },
        h3: { fontSize: "4rem" },
        h2: { fontSize: "5rem" },
        h1: { fontSize: "6rem" },

        small: { fontSize: "0.9rem" },
        normal: { fontSize: "1rem" },
        medium: { fontSize: "1.2rem" },
        large: { fontSize: "1.4em" },
        subtitle: { fontSize: "1rem", fontWeight: 500, opacity: 0.7 },
        caption: { fontSize: "0.9rem", fontWeight: 500, opacity: 0.7, fontStyle: "italic" },
    },
    shadows: [
        "none",
        "0px 0px 10px -2px rgba(0,0,0,0.2)",
        "0px 0px 10px -1px rgba(0,0,0,0.2)",
        "0px 0px 10px 0px rgba(0,0,0,0.2)",
        "0px 0px 10px 1px rgba(0,0,0,0.2)",
        "0px 0px 10px 2px rgba(0,0,0,0.2)",
    ],
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: "0px",
                    margin: 10,
                },
            },
        },
        MuiBox: {
            styleOverrides: {
                root: {
                    display: "none",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    "& .MuiCardHeader-root": {
                        "& .MuiCardHeader-title": {
                            fontSize: "1.5rem",
                        },
                    },
                    "& .MuiCardHeader-subheader": {
                        fontSize: "1rem",
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    minWidth: "50px",
                    margin: 2,
                    padding: "2px 10px",
                    fontSize: "12px",
                    textTransform: "none",
                    borderRadius: 3,
                },
            },
        },
    },
});

export const getTheme = (mode) => {
    return createTheme(getThemeByMode(mode));
};
