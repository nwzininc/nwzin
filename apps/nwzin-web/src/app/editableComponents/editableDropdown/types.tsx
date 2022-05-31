import { EditableTextProps } from "../editbleText/types";
import { CommonTextProps, ValidationProps, CommonContainerProps } from "../types";

export interface SelectOption {
   label: string;
   value: string;
}
export interface InputStyles {
   size?: string;
   focusBorderColor?: string;
   isReadOnly?: boolean;
   isDisabled?: boolean;
}
export interface EditableDropdownProps{
   id: string;
   name: string;
   label: CommonTextProps & Partial<EditableTextProps>;
   isInternational: boolean;
   placeholder: CommonTextProps;
   validations: ValidationProps;
   inputStyles: CommonContainerProps & InputStyles;
   defaultCountry: string;
   options: SelectOption[];
}