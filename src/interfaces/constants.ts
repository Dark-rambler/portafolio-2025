import { IconType } from "../components/IconSelect/iconSelect";

export interface INavMenuItems {
    link: string;
    translation?: string;
    label?: string;
    tooltip?: string;
}
export interface ISocialMediaLinks extends INavMenuItems {
    icon: IconType;
}
export interface IProject extends INavMenuItems {
    title: string;
    description: string;
    image: string;
}

export interface ITechnologies {
    name: string;
    icon: IconType;
    description : string;
    translation: string;
    color?: string;
}