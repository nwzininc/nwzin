/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";
import { IconType } from "react-icons/lib";

export interface PaddingConfiguratorProps{
    id?: string;
    onChange: (event: any) => void;
    value: string;
    configLabel: string;
}
export interface  PaddingInputProps {
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  ref?: any;
}
export interface AlignIconProps{
    iconType: IconType;
    isSelected: boolean;
    handleClick: (value: any) => void;
}