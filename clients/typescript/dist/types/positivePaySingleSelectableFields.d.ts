import { PositivePayFields } from "./positivePayFields";
import { VersionType } from "./versionType";
export interface PositivePaySingleSelectableFields {
    includeAllPositivePayFields: boolean | null;
    positivePayFields: PositivePayFields;
    version1: VersionType;
}
