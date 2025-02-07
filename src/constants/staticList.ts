import { INavMenuItems, IProject, ISocialMediaLinks, ITechnologies } from "../interfaces/constants";
import { GITHUB, INSTAGRAM, LINKEDIN } from "./staticRoutes";
export const navMenuItems: INavMenuItems[] = [
    {
        label: "Inicio",
        translation: "home",
        link: "#presentation",
    },
    {
        label: "Servicios",
        translation: "services",
        link: "#services",
    },
    {
        label: "Proyectos",
        translation: "projects",
        link: "#projects",
    },
    {
        label: "Habilidades",
        translation: "skills",
        link: "#skills",
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
        title: "FunFit",
        description: "Sistema ecommerce de venta de productos saludables, con sistema de administración de productos, ventas y usuarios.",
        image: "/common/static/images/projects/funfit.webp",
        link: "/project1",
        business: "FunFit"
    },
    {
        title: "EndeSys ERP",
        description: "Descripción del proyecto 2",
        image: "/common/static/images/projects/endeErp.webp",
        link: "/project2",
        business: "Ende Servicios y Construcciones"
    },
    {
        title: "TechoBol sistema de finanzas",
        description: "Descripción del proyecto 3",
        image: "/common/static/images/projects/finanzaSys.webp",
        link: "/project3",
        business: "TechoBol"
    },
    {
        title: "Sistema de envio masivo de mensajes",
        description: "Descripción del proyecto 4",
        image: "/common/static/images/projects/agilSoftSys.webp",
        link: "/project4",
        business: "AgilSoft"
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
        name: "TypeScript",
        icon: "typescript",
        description: "TypeScript es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft.",
        translation: "typeScript",
        color: "blue-500"
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