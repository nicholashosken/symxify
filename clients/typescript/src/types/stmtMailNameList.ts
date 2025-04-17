import { StmtMailName } from "./stmtMailName";

export interface StmtMailNameList {
    hasReachedMaximumListSize: boolean | null;
    stmtMailName: StmtMailName[];
}