import { StmtMailName } from "./stmtMailName";
export interface StmtMailNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    stmtMailName: StmtMailName[];
    stmtMailNameSpecified: boolean;
}
