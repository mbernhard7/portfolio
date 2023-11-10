import { AppBar, Avatar, Box, Paper, IconButton, Tab, Tabs, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { Menu } from "@mui/icons-material";
import * as React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DRAWER_HEIGHT, EPage, HEADER_HEIGHT, PAGES } from "../../constants";

export const Header: React.FC<{
    currentPage: EPage;
    onExpandedChange: (isExpanded: boolean) => void;
}> = ({ currentPage, onExpandedChange }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const phoneMode = useMediaQuery("(max-width:575px)");

    const handleClick = () => {
        setDrawerOpen(!drawerOpen);
    };

    useEffect(() => {
        onExpandedChange(phoneMode && drawerOpen);
    }, [phoneMode, drawerOpen]);

    const tabs = (
        <Tabs value={currentPage}>
            {PAGES.map(({ key, name, route }) => (
                <Tab
                    sx={{ width: "110px", py: "10px" }}
                    key={key}
                    label={name}
                    value={key}
                    to={route}
                    component={Link}
                />
            ))}
        </Tabs>
    );

    return (
        <>
            <Box
                sx={{
                    position: "absolute",
                    top: HEADER_HEIGHT,
                    width: "100%",
                    height: DRAWER_HEIGHT + 1,
                    overflow: "hidden"
                }}
            >
                <Paper
                    elevation={1}
                    sx={{
                        position: "absolute",
                        top: phoneMode && drawerOpen ? 0 : -DRAWER_HEIGHT,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        transition: ".25s ease-out"
                    }}
                >
                    {tabs}
                </Paper>
            </Box>

            <AppBar position="static" sx={{ height: `${HEADER_HEIGHT}px`, zIndex: 2 }} elevation={2}>
                <Toolbar
                    sx={{
                        justifyContent: phoneMode && drawerOpen ? "center" : "flex-end",
                        height: `${HEADER_HEIGHT}px`,
                        width: "100%",
                        px: "16px !important"
                    }}
                >
                    <Box display="flex" sx={{ position: "absolute", left: "12px", gap: "10px", alignItems: "center" }}>
                        <Avatar alt="Miles Bernhard" src={`${process.env.PUBLIC_URL}/images/personal.jpg`} />
                        <Typography variant="h5">Miles Bernhard</Typography>
                    </Box>

                    {!phoneMode && tabs}
                    {phoneMode && (
                        <IconButton
                            sx={{ position: "absolute", right: "12px" }}
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleClick}
                        >
                            <Menu />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};
