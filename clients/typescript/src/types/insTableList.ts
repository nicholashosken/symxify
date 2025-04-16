import { InsTable } from "./insTable";

export interface InsTableList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    insTable: InsTable[];
    insTableSpecified: boolean;
}