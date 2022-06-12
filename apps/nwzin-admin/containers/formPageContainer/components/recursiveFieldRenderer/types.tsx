import { Dispatch, SetStateAction } from "react";
import { FormSchema, FormState, FormTheme } from "../../types";

export interface RecursiveFieldRendererProps{
    childrenFields: string[];
    formState: FormState;
    height: string;
    theme: FormTheme;
    width: string;
    page: FormSchema;
    isCurrentPage: boolean;
    setPageIndex: Dispatch<SetStateAction<number>>;
}