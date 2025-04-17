import { InsTable } from "./insTable";

export interface InsTableList {
    hasReachedMaximumListSize: boolean | null;
    insTable: InsTable[];
}