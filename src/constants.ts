export enum EPage {
    HOME,
    RESUME,
    PROJECTS
}

export type TPage = { key: EPage; name: string; route: string };

export const PAGES: TPage[] = [
    {
        key: EPage.HOME,
        name: "Home",
        route: "/home"
    },
    {
        key: EPage.RESUME,
        name: "Resume",
        route: "/resume"
    },
    {
        key: EPage.PROJECTS,
        name: "Projects",
        route: "/projects"
    }
];

export const HEADER_HEIGHT = 64;
export const DRAWER_HEIGHT = 48;
