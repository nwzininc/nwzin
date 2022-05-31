import { EditableTextProps } from "../editbleText/types";
import { CommonTextProps, ValidationProps, CommonContainerProps } from "../types";

export interface InputStyles {
   size?: string;
   focusBorderColor?: string;
   isReadOnly?: boolean;
   isDisabled?: boolean;
}
export interface EditbleDatePickerProps{
   id: string;
   name: string;
   label: CommonTextProps & Partial<EditableTextProps>;
   placeholder: CommonTextProps;
   validations: ValidationProps;
   inputStyles: CommonContainerProps & InputStyles;
   defaultCountry: string;
}