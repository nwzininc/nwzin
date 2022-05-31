/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from "react";
import { IconType } from "react-icons/lib";

export interface BorderConfiguratorProps{
    id?: string;
    onChange: (event: any) => void;
    value: string;
}
export interface  BorderStyleProps {
  value: "solid" | 'dashed' | "dotted";
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  handleClick: () => void;
}

export interface StyleIconProps{
  iconType: IconType;
  isSelected: boolean;
  handleClick: (value: any) => void;
}