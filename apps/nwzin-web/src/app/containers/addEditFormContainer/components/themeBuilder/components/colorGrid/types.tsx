import { ColorScale } from "../../../../helper";

export interface ColorGridProps{
    id?: string;
    colorScale: ColorScale
}
export interface ColorBoxProps {
    colorKey:  string;
    colorCode: string;
}