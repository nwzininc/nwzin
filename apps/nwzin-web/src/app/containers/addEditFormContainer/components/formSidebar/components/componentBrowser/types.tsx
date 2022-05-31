import { IconType } from "react-icons/lib";

export interface ComponentBrowserProps{
    id?: string;
}

export interface DraggableFormFieldProps {
    id: string;
    label: string,
    icon: IconType,
    bgColor: string,
}