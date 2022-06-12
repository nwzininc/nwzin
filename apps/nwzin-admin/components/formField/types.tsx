import { InputProps, TextProps } from "@chakra-ui/react";

export interface FormFieldProps extends InputProps{
    name: string;
    label: string;
    rules?: any;
    labelStyles: TextProps;
}