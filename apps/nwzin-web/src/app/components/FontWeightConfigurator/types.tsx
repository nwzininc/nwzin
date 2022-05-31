/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FontWeightConfiguratorProps{
    id?: string;
    onChange: (event: any) => void;
    value: "light" | "normal" | "medium" | "semibold" | "bold";
}
export interface FWIconProps{
    weight: "light" | "normal" | "medium" | "semibold" | "bold";
    isSelected: boolean;
    handleClick: (value: any) => void;
}