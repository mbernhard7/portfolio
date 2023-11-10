import { Box } from "@mui/material";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";

export type SquashStackProps = {
    cards: React.ReactNode[];
    margin?: number;
    cardWidth?: number;
    gap?: number;
};

export const SquashStack: React.FC<SquashStackProps> = ({ cards, margin = 40, cardWidth = 350, gap = 20 }) => {
    const makeColumns = (width: number) => {
        let numCols = Math.min(Math.floor((width - margin) / (cardWidth + gap)), cards.length);
        numCols = numCols > 0 ? numCols : 1;
        const newColumns: React.ReactNode[][] = [...Array(numCols)].map(() => []);
        cards.forEach((p, i) => {
            newColumns[i % numCols].push(p);
        });
        return newColumns;
    };

    const [width, setWidth] = useState(window.innerWidth);

    const columns = useMemo(() => makeColumns(width), [width]);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
    });

    return (
        <Box
            display="flex"
            flexDirection="row"
            sx={{
                width: 1,
                gap: `${gap}px`,
                alignItems: "top",
                justifyContent: "center",
                marginX: "auto",
                flexWrap: "wrap"
            }}
        >
            {columns.map((col, i) => (
                <Box display="flex" key={i} flexDirection="column" sx={{ gap: `${gap}px` }}>
                    {col.map((card, j) => (
                        <Box key={j}>{card}</Box>
                    ))}
                </Box>
            ))}
        </Box>
    );
};
