import { ChangeEvent } from "react";
import { FieldError, RefCallBack } from "react-hook-form";
import { FormTheme, PageItem } from "../../containers/formPageContainer/types";

export interface InputProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    name?: string;
    ref?: RefCallBack;
    error?: FieldError;
    invalid?: boolean;
}

export interface InputWrapperProps{
    pageItem: PageItem;
    theme: FormTheme
}