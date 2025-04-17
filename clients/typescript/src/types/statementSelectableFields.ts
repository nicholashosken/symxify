import { StatementFields } from "./statementFields";
import { VersionType } from "./versionType";

export interface StatementSelectableFields {
    includeAllStatementFields: boolean | null;
    statementFields: StatementFields;
    version1: VersionType;
}