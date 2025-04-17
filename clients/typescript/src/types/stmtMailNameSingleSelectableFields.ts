import { StmtMailNameFields } from "./stmtMailNameFields";
import { VersionType } from "./versionType";

export interface StmtMailNameSingleSelectableFields {
    includeAllStmtMailNameFields: boolean | null;
    stmtMailNameFields: StmtMailNameFields;
    version1: VersionType;
}