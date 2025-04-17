import { StmtMessages } from "./stmtMessages";
import { VersionType } from "./versionType";
export interface StmtMessagesSelectFieldsResponse {
    stmtMessages: StmtMessages;
    version1: VersionType;
    messageId: string;
}
