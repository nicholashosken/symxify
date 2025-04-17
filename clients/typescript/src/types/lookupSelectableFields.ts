import { LookupFields } from "./lookupFields";
import { VersionType } from "./versionType";

export interface LookupSelectableFields {
    includeAllLookupFields: boolean | null;
    lookupFields: LookupFields;
    version1: VersionType;
}