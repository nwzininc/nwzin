import { EditableTextProps } from "../../editableComponents/editbleText/types";
import { CommonContainerProps, CommonTextProps } from "../../editableComponents/types";

export interface HeadingProps extends Omit<EditableTextProps, "value">{
    text: CommonTextProps;
    containerStyles: CommonContainerProps;
    id: string;
}