import * as React from "react";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Link,
    Tooltip,
    Typography,
    useMediaQuery
} from "@mui/material";
import { Description, GitHub, LinkedIn, Launch } from "@mui/icons-material";
import personal from "../../assets/data/personal.json";

export type TPersonalInfo = {
    name: string;
    image: string;
    shortDescription: string;
    description: string;
    socialLinks: { icon: string; name: string; url: string }[];
};

export const Home: React.FC = () => {
    const { name, image, shortDescription, description, socialLinks }: TPersonalInfo = personal;
    const phoneMode = useMediaQuery("(max-width:575px)");

    const getIcon = (linkName: string): JSX.Element => {
        switch (linkName) {
            case "Resume":
                return <Description />;
            case "LinkedIn":
                return <LinkedIn />;
            case "GitHub":
                return <GitHub />;
            default:
                return <Launch />;
        }
    };

    return (
        <Card
            sx={{
                maxWidth: "600px",
                marginX: "auto",
                display: "flex",
                flexDirection: phoneMode ? "column" : "row",
                justifyContent: "center",
                overflow: "visible",
                mb: "20px"
            }}
            elevation={1}
        >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CardMedia
                    component="img"
                    sx={{ width: 250, borderRadius: "50%", margin: "16px" }}
                    src={require(`../../assets/images/${image}`)}
                    alt="Headshot"
                />
                <CardHeader sx={{ textAlign: "center" }} color="primary" title={name} subheader={shortDescription} />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
                    p: "16px"
                }}
            >
                <CardContent sx={{ pt: 0 }}>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {socialLinks.map(({ url, name }, i) => (
                        <Tooltip key={i} title={name === "Resume" ? "Download Resume" : `Visit ${name}`}>
                            <Link aria-label="share" href={url} target="_blank">
                                {getIcon(name)}
                            </Link>
                        </Tooltip>
                    ))}
                </CardActions>
            </Box>
        </Card>
    );
};
