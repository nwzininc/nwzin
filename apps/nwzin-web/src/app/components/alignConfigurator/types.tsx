/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconType } from "react-icons/lib";

export interface AlignConfiguratorProps{
    id?: string;
    onChange: (event: any) => void;
    value: "left" | "center" | "right";
}
export interface AlignIconProps{
    iconType: IconType;
    isSelected: boolean;
    handleClick: (value: any) => void;
}