import * as React from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    IconButton,
    Link,
    Tooltip,
    Typography
} from "@mui/material";
import { ExpandMore, Launch } from "@mui/icons-material";
import { useState } from "react";

export type TExperience = {
    title?: string;
    image: string;
    position: string;
    date: string;
    description: string;
    links?: { url: string; name: string }[];
};

export const ResumeCard: React.FC<TExperience> = ({ title, image, position, date, description, links }) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    return (
        <Card sx={{ width: 1, minHeight: "72px" }} elevation={1}>
            <CardHeader
                color="primary"
                avatar={<Avatar alt={title} src={require(`../../../assets/images/${image}`)} />}
                title={title ? `${position} @ ${title}` : position}
                subheader={date}
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
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {links?.map(({ url }, i) => (
                        <Tooltip key={i} title="Visit site">
                            <Link aria-label="share" href={url} target="_blank">
                                <Launch />
                            </Link>
                        </Tooltip>
                    ))}
                </CardActions>
            </Collapse>
        </Card>
    );
};
