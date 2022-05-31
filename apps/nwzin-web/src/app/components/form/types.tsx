import { FlexProps } from "@chakra-ui/react";
import { UseFormReturn } from "react-hook-form";

export interface FormProps{
  onSubmit: (data: any, methods: UseFormReturn) => void;
  onSubmitError?: (errorData: any) => void;
  formStyles?: FlexProps;
}