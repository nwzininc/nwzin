import { EditableTextProps } from "../editbleText/types";
import { CommonTextProps, ValidationProps } from "../types";

export interface LocationProps{
    id: string;
    name: string;
    label: CommonTextProps & Partial<EditableTextProps>;
    validations: ValidationProps;
}