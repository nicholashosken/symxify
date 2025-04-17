import { StmtMessages } from "./stmtMessages";
import { VersionType } from "./versionType";

export interface StmtMessagesSearchPagedSelectFieldsResponse {
    stmtMessages: StmtMessages[];
    token: string;
    version1: VersionType;
    messageId: string;
}