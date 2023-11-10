import * as React from "react";
import { Box } from "@mui/material";

export type TPageSliderProps = {
    pages: React.ReactElement[];
    index: number;
    offset: number;
};

export const PageSlider: React.FC<TPageSliderProps> = ({ pages, index, offset }) => {
    return (
        /* <Box
            sx={{
                position: "absolute",
                overflowX: "hidden",
                overflowY: "hidden",
                width: 1,
                height: `calc(100% - ${offset}px)`,
                transition: ".25s ease-out",
                p: "15px",
                bottom: 0
            }}
        >
            {pages.map((page, idx) => {
                return (
                    <Box
                        display="inline-block"
                        key={idx}
                        sx={{
                            position: "absolute",
                            top: 0,
                            overflowY: "scroll !important",
                            overflow: "hidden",
                            width: 1,
                            height: 1,
                            p: "15px",
                            left: `${(idx - index) * 100}%`,
                            transition: ".25s ease-out"
                        }}
                    >
                        {page}
                    </Box>
                );
            })}
        </Box> */
        <Box sx={{ p: "15px" }}>{pages[index]}</Box>
    );
};
