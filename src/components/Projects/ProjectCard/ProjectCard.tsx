import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Collapse,
    IconButton,
    Link,
    Tooltip,
    Typography
} from "@mui/material";
import * as React from "react";
import { ExpandMore, GitHub, Launch } from "@mui/icons-material";
import { useState } from "react";

export type TProject = {
    title: string;
    subtitle: string;
    image: string;
    text: string;
    links: { url: string; name: string }[];
};

export const ProjectCard: React.FC<TProject> = ({ title, subtitle, image, text, links }) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <Card sx={{ width: 350, height: "fit-content" }} elevation={3}>
            <CardMedia
                sx={{ height: "200px" }}
                component="img"
                image={require(`../../../assets/images/${image}`)}
                alt={title}
            />
            <CardHeader
                color="primary"
                title={title}
                subheader={subtitle}
                onClick={() => setExpanded(!expanded)}
                action={
                    <IconButton
                        onClick={() => setExpanded(!expanded)}
                        aria-label="expand"
                        sx={{
                            transform: !expanded ? "rotate(0deg)" : "rotate(-180deg)",
                            marginLeft: "auto",
                            transition: ".25s"
                        }}
                    >
                        <ExpandMore />
                    </IconButton>
                }
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent sx={{ pt: 0, minHeight: "fit-content" }}>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
                <CardActions>
                    {links.map(({ url, name }, i) => (
                        <Tooltip key={i} title={name === "GitHub" ? "Open in GitHub" : "Visit site"}>
                            <Link aria-label="share" href={url} target="_blank">
                                {name === "GitHub" ? <GitHub /> : <Launch />}
                            </Link>
                        </Tooltip>
                    ))}
                </CardActions>
            </Collapse>
        </Card>
    );
};
