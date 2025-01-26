import { INavMenuItems, ISocialMediaLinks } from "../interfaces/constants";
import { GITHUB, INSTAGRAM, LINKEDIN } from "./staticRoutes";
export const navMenuItems: INavMenuItems[] = [
    {
        label: "Inicio",
        translation: "home",
        link: "/",
    },
    {
        label: "Proyectos",
        translation: "projects",
        link: "/projects",
    },
    {
        label: "Contáctame",
        translation: "contact",
        link: "/contact",
    },
];

export const socialMediaLinks: ISocialMediaLinks[] = [
    {
        link: LINKEDIN,
        icon: "instagram",
        hover: "Instagram",
    },
    {
        link: GITHUB,
        icon: "github",
        hover: "GitHub",
    },
    {
        link: INSTAGRAM,
        icon: "linkedin",
        hover: "LinkedIn",
    },
];