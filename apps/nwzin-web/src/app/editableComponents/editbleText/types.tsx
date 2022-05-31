import { HeadingProps, TextProps } from "@chakra-ui/react";

export interface EditableTextProps extends Omit<Partial<HeadingProps & TextProps>, "onBlur" | "onChange" | "id">{
   value: string;
   placeholder: string;
   id: string | string[];
   isHeading: boolean;
   selectionId: string;
   componentId: string;
   onFieldSelect?: (subFieldId: string) => void;
}