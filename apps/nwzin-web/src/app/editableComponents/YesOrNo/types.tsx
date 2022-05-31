import { EditableTextProps } from "../editbleText/types";
import { CommonContainerProps, CommonTextProps, ValidationProps } from "../types";

export interface YesOrNoWithTickProps {
    id: string;
    name: string;
    label: CommonTextProps & Partial<EditableTextProps>;
    validations: ValidationProps;
    yesLabel: CommonTextProps;
    noLabel: CommonTextProps;
    yesContainer: CommonContainerProps;
    noContainer: CommonContainerProps;
  }