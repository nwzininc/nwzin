/* eslint-disable @typescript-eslint/no-explicit-any */
export interface EffectConfiguratorProps{
    id?: string;
    onChange: (event: any) => void;
    value: "base" | "lg" | "dark-lg" | "xl";
}
export interface EffectIconProps{
    isSelected: boolean;
    header: string;
    handleClick: (value: any) => void;
}