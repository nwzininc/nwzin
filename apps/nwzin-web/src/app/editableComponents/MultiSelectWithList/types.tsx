import { CommonTextProps } from "../types";

export interface SelectOption{
    label: string;
    value: string;
}
export interface MultiSelectProps extends EditableOptionProps {
    id: string;
    name: string;
    question: CommonTextProps;
    options: SelectOption[]
}

export interface EditableOptionProps {
    value: string;
    index: number;
    id: string;
    componentId: string;
    optionStyles: Pick<CommonTextProps, "color">;
    handleDelete: (index: number) => () => void;
    isCurrentSelceted?: boolean;
  }
  