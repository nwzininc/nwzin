import { EditableTextProps } from "../../editableComponents/editbleText/types";
import { CommonContainerProps, CommonTextProps } from "../../editableComponents/types";

export interface DescriptionProps extends Omit<EditableTextProps, "value">{
    description: CommonTextProps;
    containerStyles: CommonContainerProps;
    id: string;
}