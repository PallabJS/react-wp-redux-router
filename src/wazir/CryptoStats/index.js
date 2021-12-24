import { Card, CardContent, CardHeader, Grid, Paper, Typography } from "@mui/material";
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
        <Paper>
            {stats.length > 0 && (
                <Card>
                    <CardHeader
                        title="Overall Performance"
                        subheader="Crypto profit sheet simplified for you"
                    />
                    <CardContent>
                        {Object.keys(stats[stats.length - 1]).map((key, keyId) => {
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
                                    <Typography variant="h6">{key} : </Typography>
                                    <Typography
                                        variant="large"
                                        sx={{ fontWeight: 1000, color: "primary.main" }}
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
                            <Card>
                                <CardHeader>{order.symbol}</CardHeader>
                                <CardContent>
                                    {Object.keys(order).map((key, keyId) => {
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
                                                <Typography variant="h6">{key} : </Typography>
                                                <Typography
                                                    variant="large"
                                                    sx={{ fontWeight: 1000, color: "primary.main" }}
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
        </Paper>
    );
};

export default index;
