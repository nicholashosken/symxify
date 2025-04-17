import { IntIndexFields } from "./intIndexFields";
import { VersionType } from "./versionType";

export interface IntIndexSingleSelectableFields {
    includeAllIntIndexFields: boolean | null;
    intIndexFields: IntIndexFields;
    version1: VersionType;
}