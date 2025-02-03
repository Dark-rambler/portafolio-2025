import { INavMenuItems, IProject, ISocialMediaLinks, ITechnologies } from "../interfaces/constants";
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

export const myTechnologies: ITechnologies[] = [
    {
        name: "Java",
        icon: "java",
        description: "Java es un lenguaje de programación de propósito general, concurrente, orientado a objetos que fue diseñado específicamente para tener tan pocas dependencias de implementación como fuera posible.",
        translation: "java",
        color: "white"

    },
    {
        name: "JavaScript",
        icon: "javaScript",
        description: "JavaScript es un lenguaje de programación que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas interacciones.",
        translation: "javaScript",
        color: "yellow-300"
    },
    {
        name: "Html",
        icon: "html",
        description: "HTML es el lenguaje de marcado estándar para crear páginas web y aplicaciones web.",
        translation: "html",
        color: "red-500"
    },
    {
        name: "Css",
        icon: "css",
        description: "CSS es un lenguaje que describe el estilo de un documento HTML.",
        translation: "css",
        color: "blue-500"
    },
    {
        name: "React",
        icon: "react",
        description: "React es una biblioteca de JavaScript para construir interfaces de usuario.",
        translation: "react",
        color: "blue-300"
    },
    {
        name: "Node",
        icon: "node",
        description: "Node.js es un entorno en tiempo de ejecución que permite ejecutar JavaScript en el servidor.",
        translation: "node",
        color: "green-500"
    },
    {
        name: "PostgreSQL",
        icon: "postgres",
        description: "PostgreSQL es un sistema de gestión de bases de datos relacional de objetos de código abierto con más de 15 años de desarrollo activo.",
        translation: "postgres",
        color: "blue-800"
    },
    {
        name: "Express",
        icon: "express",
        description: "Express es un marco de aplicación web de back-end para Node.js.",
        translation: "express",
        color: "green-500"
    },
    {
        name: "Firebase",
        icon: "firebase",
        description: "Firebase es una plataforma de desarrollo de aplicaciones móviles y web desarrollada por Firebase, Inc. en 2011 y luego adquirida por Google en 2014.",
        translation: "firebase",
        color: "yellow-500"
    },
    {
        name: "SpringBoot",
        icon: "springBoot",
        description: "Spring Boot es un proyecto de Spring que simplifica la configuración de las aplicaciones Spring.",
        translation: "springBoot",
        color: "green-500"
    }



]