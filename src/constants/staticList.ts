import { INavMenuItems, ISocialMediaLinks } from "../interfaces/constants";

export const navMenuItems: INavMenuItems[] = [
    {
        label: "Inicio",
        link: "/",
    },
    {
        label: "Proyectos",
        link: "/projects",
    },
    {
        label: "Contáctame",
        link: "/contact",
    },
];

export const socialMediaLinks: ISocialMediaLinks[] = [
    {
        link: "/",
        icon: "instagram",
        hover: "Instagram",
    },
    {
        link: "/",
        icon: "github",
        hover: "GitHub",
    },
    {
        link: "/",
        icon: "linkedin",
        hover: "LinkedIn",
    },
];