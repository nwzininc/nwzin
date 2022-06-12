import { ChangeEvent } from "react";
import { FieldError, RefCallBack } from "react-hook-form";
import { FormTheme, PageItem } from "../../containers/formPageContainer/types";

export interface NumberFormatProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    name?: string;
    ref?: RefCallBack;
    error?: FieldError;
    invalid?: boolean;
    pageItem: PageItem;
    theme: FormTheme
}

export interface NumberWrapperProps{
    pageItem: PageItem;
    theme: FormTheme
}

export interface NumberFormatValueObject{
    formattedValue: string;
    value: string;
    floatValue: number;
}