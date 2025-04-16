import { DivTable } from "./divTable";

export interface DivTableList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    divTable: DivTable[];
    divTableSpecified: boolean;
}