import { StmtMessages } from "./stmtMessages";
import { VersionType } from "./versionType";

export interface StmtMessagesPagedListSelectFieldsResponse {
    stmtMessages: StmtMessages[];
    token: string;
    version1: VersionType;
    messageId: string;
}