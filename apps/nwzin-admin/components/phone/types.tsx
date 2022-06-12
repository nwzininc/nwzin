import { ChangeEvent } from "react";
import { FieldError, RefCallBack } from "react-hook-form";
import { FormTheme, PageItem } from "../../containers/formPageContainer/types";
import { Code } from "./constants";


export interface PhoneValue{
    phone: string;
    ISD: string;
    countryCode: Code;
}
export interface PhoneFormatProps {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: PhoneValue;
    name?: string;
    ref?: RefCallBack;
    error?: FieldError;
    invalid?: boolean;
    pageItem: PageItem;
    theme: FormTheme
}

export interface PhoneWrapperProps{
    pageItem: PageItem;
    theme: FormTheme
}