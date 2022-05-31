export interface CommonTextProps {
  fontWeight?: any;
  size?: any;
  color?: any;
  align?: any;
  text: any;
}

export interface CommonContainerProps {
    // Padding
    padding: string;
    // Margin
    margin: string;
    //
    backgroundColor?: string;
    boxShadow: string;
    border: string;
    opacity: string | number;
}


export interface ValidationProps {
    isRequired: boolean;
    maxLength: number;
    minLength: number;
    max: number;
    minValue: number;
    pattern: string;
}