export interface Error{
    message: string;
}
export interface PickColorProps{
    name?: string;
    onChange?: (event: any) =>  void;
    onBlur?: () => void;
    error?: Error,
    invalid?: boolean,
    value?: Record<string, string>
}

export interface ColorSchemeProps{
    id: string;
    value: Record<string,string>
    onChange: (value: Record<string,string>) => void;
}