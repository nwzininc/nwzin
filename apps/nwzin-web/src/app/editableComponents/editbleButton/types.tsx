import { EditableTextProps } from "../editbleText/types";
import { CommonTextProps, ValidationProps, CommonContainerProps } from "../types";

export interface InputStyles {
   size?: string;
   focusBorderColor?: string;
   isReadOnly?: boolean;
   isDisabled?: boolean;
}
export interface EditbleButtonProps{
   id: string;
   backButtonlabel: CommonTextProps & Partial<EditableTextProps>;
   resetButtonlabel: CommonTextProps & Partial<EditableTextProps>;
   submitButtonlabel: CommonTextProps & Partial<EditableTextProps>;
   validations: ValidationProps;
   backButtonStyles: CommonContainerProps;
   resetButtonStyles: CommonContainerProps;
   submitButtonStyles: CommonContainerProps;
   buttonBarStyles: CommonContainerProps;
   showBackButton: boolean;
   showResetButton: boolean;
   showSubmitButton: boolean;
}