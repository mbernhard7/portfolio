import * as React from "react";
import { Box, Chip, Divider } from "@mui/material";
import experiences from "../../assets/data/experiences.json";
import educations from "../../assets/data/education.json";
import { ResumeCard, TExperience } from "./ResumeCard";
import { EducationCard, TEducation } from "./EducationCard";

export const Resume: React.FC = () => {
    const experienceList: TExperience[] = experiences;
    const educationsList: TEducation[] = educations;

    return (
        <Box
            display="flex"
            flexDirection="column"
            sx={{
                maxWidth: "600px",
                gap: "10px",
                alignItems: "center",
                marginX: "auto"
            }}
        >
            <Divider sx={{ width: 1, pb: "5px" }}>
                <Chip label="Experiences" />
            </Divider>
            {experienceList.map((experience, index) => (
                <ResumeCard key={index} {...experience} />
            ))}
            <Divider sx={{ width: 1, py: "10px" }}>
                <Chip label="Education" />
            </Divider>
            {educationsList.map((education, index) => (
                <EducationCard key={index + experienceList.length} {...education} />
            ))}
        </Box>
    );
};
