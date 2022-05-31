import { EditableTextProps } from "../editbleText/types";
import { CommonTextProps, ValidationProps, CommonContainerProps } from "../types";

export interface InputStyles {
   size?: string;
   focusBorderColor?: string;
   isReadOnly?: boolean;
   isDisabled?: boolean;
}
export interface EditbleAddressProps{
   id: string;
   name: string;
   addressLane1: CommonTextProps & Partial<EditableTextProps>;
   addressLane2: CommonTextProps & Partial<EditableTextProps>;
   city: CommonTextProps & Partial<EditableTextProps>;
   state: CommonTextProps & Partial<EditableTextProps>;
   pin: CommonTextProps & Partial<EditableTextProps>;
   country: CommonTextProps & Partial<EditableTextProps>;
   label: CommonTextProps & Partial<EditableTextProps>;
   placeholder: CommonTextProps & Partial<EditableTextProps>;
   validations: ValidationProps;
   inputStyles: CommonContainerProps & InputStyles;
   defaultCountry: string;
}