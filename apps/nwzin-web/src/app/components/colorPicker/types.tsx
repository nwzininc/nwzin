export interface Error{
    message: string;
}
export interface ColorPickerProps{
    name: string;
    id: string;
    onChange: (event: any) =>  void;
    onBlur?: () => void;
    error?: Error,
    invalid?: boolean,
    value:string;
}

export interface ColorSchemeProps{
    id: string;
    value: string;
    onChange: (value: string) => void;
}