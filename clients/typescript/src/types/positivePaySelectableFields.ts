import { PositivePayFields } from "./positivePayFields";
import { VersionType } from "./versionType";

export interface PositivePaySelectableFields {
    includeAllPositivePayFields: boolean | null;
    positivePayFields: PositivePayFields;
    version1: VersionType;
}