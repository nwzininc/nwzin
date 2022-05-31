/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ColorConfiguratorProps{
    id?: string;
    onChange: (event: any) => void;
    value: string;
    configLabel: string;
}