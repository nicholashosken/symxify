import { DivTable } from "./divTable";

export interface DivTableList {
    hasReachedMaximumListSize: boolean | null;
    divTable: DivTable[];
}