import { INavMenuItems, ISocialMediaLinks } from "../interfaces/constants";

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