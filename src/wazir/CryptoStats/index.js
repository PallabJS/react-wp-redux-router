import { Card, CardContent, CardHeader, Grid, Paper, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";

import { Crypto } from "../api/wazirx";

const myCrypto = new Crypto();

const index = () => {
    const [stats, setStats] = useState([]);
    const loadStats = async () => {
        let res = await myCrypto.getProfitStats();
        if (res.success) {
            setStats(res.data);
        }
    };

    useEffect(() => {
        loadStats();
    }, []);

    return (
        <>
            {stats.length > 0 && (
                <Card>
                    <CardHeader
                        title="Overall Performance"
                        subheader="Crypto profit sheet simplified for you"
                    />
                    <CardContent>
                        {Object.keys(stats.at(-1)).map((key, keyId) => {
                            return (
                                <Box
                                    key={keyId}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ flex: 0.5, textTransform: "capitalize" }}
                                    >
                                        {key}
                                    </Typography>

                                    <span sx={{ flex: 0.1 }}> : </span>
                                    <Typography
                                        variant="large"
                                        sx={{
                                            flex: 0.4,
                                            fontWeight: 400,
                                            color:
                                                key === "totalProfit"
                                                    ? stats.at(-1)[key] > 0
                                                        ? "success.main"
                                                        : "fail.main"
                                                    : "primary.main",
                                        }}
                                    >
                                        {isNaN(stats[stats.length - 1][key])
                                            ? stats[stats.length - 1][key].toUpperCase()
                                            : stats[stats.length - 1][key].toFixed(3)}
                                    </Typography>
                                </Box>
                            );
                        })}
                    </CardContent>
                </Card>
            )}

            <Grid container>
                {stats.map((order, orderId) => {
                    if (orderId === stats.length - 1) return null;
                    return (
                        <Grid item lg={4} sm={6} xs={12} key={orderId}>
                            <Card
                                sx={{
                                    padding: 2,
                                    "& .MuiCardHeader-root": {
                                        padding: "5px 20px",
                                        "& .MuiCardHeader-title": {
                                            fontSize: "1.2rem",
                                            textTransform: "uppercase",
                                            color: blue[500],
                                        },
                                    },
                                    "& .MuiCardHeader-subheader": {
                                        fontSize: "1rem",
                                    },
                                    "& .MuiCardContent-root": {
                                        padding: "5px 20px",
                                    },
                                }}
                            >
                                <CardHeader title={order.symbol} />
                                <CardContent>
                                    {Object.keys(order).map((key, keyId) => {
                                        if (key === "symbol") return null;
                                        return (
                                            <Box
                                                key={keyId}
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                    mb: 1,
                                                }}
                                            >
                                                <Typography
                                                    variant="medium"
                                                    sx={{ flex: 0.5, textTransform: "capitalize" }}
                                                >
                                                    {key}
                                                </Typography>
                                                <span style={{ flex: 0.1 }}> : </span>
                                                <Typography
                                                    variant="large"
                                                    sx={{
                                                        flex: 0.4,
                                                        color:
                                                            key === "profit"
                                                                ? order[key] > 0
                                                                    ? "success.main"
                                                                    : "fail.main"
                                                                : "primary.main",
                                                    }}
                                                >
                                                    {isNaN(order[key])
                                                        ? order[key].toUpperCase()
                                                        : order[key].toFixed(3)}
                                                </Typography>
                                            </Box>
                                        );
                                    })}
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default index;
