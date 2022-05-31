export interface DatagridHeaderProps{
    setPageIndex: React.Dispatch<React.SetStateAction<number>>;
    selectedPageIndex: number;
    pageIndex: number;
    pageCount: number;
    addRowButtonLabel: string;
    handleAddRow: () => void;
}