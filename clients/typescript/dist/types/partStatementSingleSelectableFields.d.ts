import { PartStatementFields } from "./partStatementFields";
import { VersionType } from "./versionType";
export interface PartStatementSingleSelectableFields {
    includeAllPartStatementFields: boolean | null;
    partStatementFields: PartStatementFields;
    version1: VersionType;
}
