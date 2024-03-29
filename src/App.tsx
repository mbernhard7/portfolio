import * as React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Header } from "./components/Header";
import { DRAWER_HEIGHT, EPage, HEADER_HEIGHT, PAGES } from "./constants";
import { Resume } from "./components/Resume";
import { Home } from "./components/Home";
import { PageSlider } from "./components/PageSlider";
import { Projects } from "./components/Projects";

export default () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [pageKey, setPageKey] = useState<EPage>(
        PAGES.find((page) => page.route === location?.pathname?.toLowerCase())?.key || EPage.HOME
    );
    const [offset, setOffset] = useState(HEADER_HEIGHT);

    useEffect(() => {
        const newPage = PAGES.find((page) => page.route === location.pathname.toLowerCase());
        if (newPage) {
            setPageKey(newPage.key);
        } else {
            navigate("/home");
        }
    }, [location]);

    return (
        <Box
            sx={{
                height: "100vh",
                width: 1
            }}
        >
            <Box sx={{ width: "100%", height: "100%", backgroundColor: "#121212B0" }}>
                <Header
                    currentPage={pageKey}
                    onExpandedChange={(isExpanded) =>
                        setOffset(isExpanded ? DRAWER_HEIGHT + HEADER_HEIGHT : HEADER_HEIGHT)
                    }
                />
                <PageSlider
                    pages={[<Home />, <Resume />, <Projects />]}
                    index={PAGES.map((page) => page.key).indexOf(pageKey)}
                    offset={offset}
                />
            </Box>
        </Box>
    );
};
