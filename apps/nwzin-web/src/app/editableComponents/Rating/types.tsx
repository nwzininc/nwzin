import { EditableTextProps } from "../editbleText/types";
import { CommonTextProps, ValidationProps } from "../types";

export interface EditbleRatingProps{
    id: string;
    name: string;
    label: CommonTextProps & Partial<EditableTextProps>;
    validations: ValidationProps;
    unratedIconStyles: CommonTextProps;
    ratedIconStyles: CommonTextProps;
}