import { StmtMessagesFields } from "./stmtMessagesFields";
import { VersionType } from "./versionType";
export interface StmtMessagesSelectableFields {
    includeAllStmtMessagesFields: boolean | null;
    stmtMessagesFields: StmtMessagesFields;
    version1: VersionType;
}
