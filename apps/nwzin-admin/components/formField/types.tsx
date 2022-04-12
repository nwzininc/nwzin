import { InputProps } from "@chakra-ui/react";

export interface FormFieldProps extends InputProps{
    name: string;
    label: string;
    placeholder: string;
}