import * as React from "react";
import projects from "../../assets/data/projects.json";
import { ProjectCard, TProject } from "./ProjectCard";
import { SquashStack } from "../SquashStack";

export const Projects: React.FC = () => {
    const projectList: TProject[] = projects;
    return (
        <SquashStack
            cards={projectList.map((proj) => (
                <ProjectCard {...proj} />
            ))}
        />
    );
};
