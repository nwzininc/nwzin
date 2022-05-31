import { EditableTextProps } from "../editbleText/types";
import { CommonTextProps, ValidationProps, CommonContainerProps } from "../types";

export interface InputStyles {
   size?: string;
   focusBorderColor?: string;
   isReadOnly?: boolean;
   isDisabled?: boolean;
}
export interface EditbleNumberProps{
   id: string;
   name: string;
   label: CommonTextProps & Partial<EditableTextProps>;
   isInternational: boolean;
   placeholder: CommonTextProps;
   validations: ValidationProps;
   inputStyles: CommonContainerProps & InputStyles;
   defaultCountry: string;
}