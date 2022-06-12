export interface TopbarProps {
  id?: string;
}

export interface PageListProps {
  id?: string;
}
export interface PageProps {
  id?: string;
  isSelected: boolean;
  pageIndex: number;
  name: string;
  handleSelectPage: () => void;
}


export interface SavePublishProps{
  id?: string;
}