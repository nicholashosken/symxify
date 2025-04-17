import { StmtMessagesFields } from "./stmtMessagesFields";
import { VersionType } from "./versionType";

export interface StmtMessagesSingleSelectableFields {
    includeAllStmtMessagesFields: boolean | null;
    stmtMessagesFields: StmtMessagesFields;
    version1: VersionType;
}