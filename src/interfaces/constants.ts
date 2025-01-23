import { IconType } from "../components/IconSelect/iconSelect";

export interface INavMenuItems {
    link: string;
    label?: string;
    hover?: string;
}
export interface ISocialMediaLinks extends INavMenuItems {
    icon: IconType;
}