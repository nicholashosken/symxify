import { StmtMailName } from "./stmtMailName";
import { VersionType } from "./versionType";
export interface StmtMailNameSelectFieldsResponse {
    stmtMailName: StmtMailName;
    version1: VersionType;
    messageId: string;
}
