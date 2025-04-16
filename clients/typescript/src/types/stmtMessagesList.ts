import { StmtMessages } from "./stmtMessages";

export interface StmtMessagesList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    stmtMessages: StmtMessages[];
    stmtMessagesSpecified: boolean;
}