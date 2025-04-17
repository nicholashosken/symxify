import { StmtMailName } from "./stmtMailName";
import { VersionType } from "./versionType";

export interface StmtMailNameSearchPagedSelectFieldsResponse {
    stmtMailName: StmtMailName[];
    token: string;
    version1: VersionType;
    messageId: string;
}