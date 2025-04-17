import { StmtMailNameFields } from "./stmtMailNameFields";
import { VersionType } from "./versionType";

export interface StmtMailNameSelectableFields {
    includeAllStmtMailNameFields: boolean | null;
    stmtMailNameFields: StmtMailNameFields;
    version1: VersionType;
}