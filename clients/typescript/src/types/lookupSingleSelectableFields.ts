import { LookupFields } from "./lookupFields";
import { VersionType } from "./versionType";

export interface LookupSingleSelectableFields {
    includeAllLookupFields: boolean | null;
    lookupFields: LookupFields;
    version1: VersionType;
}