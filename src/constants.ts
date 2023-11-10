export enum EPage {
    HOME,
    RESUME,
    PROJECTS
    /*
    TESTIMONIALS,
    CONTACT
     */
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
    /*
    {
        key: EPage.TESTIMONIALS,
        name: "Testimonials",
        route: "/testimonials"
    },
    {
        key: EPage.CONTACT,
        name: "Contact",
        route: "/contact"
    }
     */
];

export const HEADER_HEIGHT = 64;
export const DRAWER_HEIGHT = 48;
export const EXPANDED_HEIGHT = 112;
