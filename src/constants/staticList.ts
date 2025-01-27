import { INavMenuItems, IProject, ISocialMediaLinks } from "../interfaces/constants";
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
        link: INSTAGRAM,
        icon: "instagram",
        tooltip: "Instagram",
    },
    {
        link: GITHUB,
        icon: "github",
        tooltip: "GitHub",
    },
    {
        link: LINKEDIN,
        icon: "linkedin",
        tooltip: "LinkedIn",
    },
];

export const projects: IProject[] = [
    {
        title: "Proyecto 1",
        description: "Descripción del proyecto 1",
        image: "https://images.squarespace-cdn.com/content/v1/5e13e7e8e3a0d42924a7e3e9/5f2ed303-9c7e-44aa-a918-36a0d3811fc0/Amazon_Thumbnail_1600x1600.jpg?format=1500w",
        link: "/project1",
    },
    {
        title: "Proyecto 2",
        description: "Descripción del proyecto 2",
        image: "https://images.squarespace-cdn.com/content/v1/5e13e7e8e3a0d42924a7e3e9/5f2ed303-9c7e-44aa-a918-36a0d3811fc0/Amazon_Thumbnail_1600x1600.jpg?format=1500w",
        link: "/project2",
    },
    {
        title: "Proyecto 3",
        description: "Descripción del proyecto 3",
        image: "https://images.squarespace-cdn.com/content/v1/5e13e7e8e3a0d42924a7e3e9/5f2ed303-9c7e-44aa-a918-36a0d3811fc0/Amazon_Thumbnail_1600x1600.jpg?format=1500w",
        link: "/project3",
    },
    {
        title: "Proyecto 4",
        description: "Descripción del proyecto 4",
        image: "https://images.squarespace-cdn.com/content/v1/5e13e7e8e3a0d42924a7e3e9/5f2ed303-9c7e-44aa-a918-36a0d3811fc0/Amazon_Thumbnail_1600x1600.jpg?format=1500w",
        link: "/project4",
    }
]