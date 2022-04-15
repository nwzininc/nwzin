import { DropzoneOptions } from 'react-dropzone';

export interface DropFile {
    path: string;
    lastModified: number;
    lastModifiedDate: string;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
}
export interface DropzoneProps extends DropzoneOptions{
    name?: string;
    value?: DropFile[];
    onChange?: (event: any) => void;
}