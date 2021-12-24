import React, { useState } from "react";

import { Paper, Box, Button, Typography } from "@mui/material";

const ThemeSampler = () => {
    const [themeMode, setThemeMode] = useState("light");

    return (
        <>
            <Paper variant="elevation" sx={{ m: 4, p: 1, boxShadow: 2 }}>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" color="info">
                    Info
                </Button>

                <Box>
                    <Typography variant="h6">HEADER 6</Typography>
                    <Typography variant="h5">HEADER 5</Typography>
                    <Typography variant="h4">HEADER 4</Typography>
                    <Typography variant="h3">HEADER 3</Typography>
                    <Typography variant="h2">HEADER 2</Typography>
                    <Typography variant="h1">HEADER 1</Typography>

                    <Typography variant="small" sx={{ display: "block" }}>
                        I am a Small text
                    </Typography>
                    <Typography variant="normal" sx={{ display: "block" }}>
                        I am a normal body text
                    </Typography>
                    <Typography variant="medium" sx={{ display: "block" }}>
                        I am a Medium text
                    </Typography>
                    <Typography variant="large" sx={{ display: "block" }}>
                        I am a Large text
                    </Typography>
                    <Typography variant="subtitle" sx={{ display: "block" }}>
                        I am a subtitle
                    </Typography>
                    <Typography variant="caption" sx={{ display: "block" }}>
                        I am a caption
                    </Typography>

                    {/* <Typography variant="" sx={{ display: "block" }}>
                        I am a caption
                    </Typography>
                    <Typography variant="caption" sx={{ display: "block" }}>
                        I am a caption
                    </Typography> */}
                </Box>
            </Paper>

            <Box sx={{ mt: 1, boxShadow: 1 }}>
                <button
                    onClick={() => {
                        themeMode === "light" ? setThemeMode("dark") : setThemeMode("light");
                    }}
                >
                    mode = {themeMode}
                </button>
            </Box>
        </>
    );
};

export default ThemeSampler;
