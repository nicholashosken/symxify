import { StmtMailName } from "./stmtMailName";
import { VersionType } from "./versionType";
export interface StmtMailNamePagedListSelectFieldsResponse {
    stmtMailName: StmtMailName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
