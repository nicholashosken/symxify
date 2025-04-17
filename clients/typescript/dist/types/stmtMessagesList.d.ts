import { StmtMessages } from "./stmtMessages";
export interface StmtMessagesList {
    hasReachedMaximumListSize: boolean | null;
    stmtMessages: StmtMessages[];
}
