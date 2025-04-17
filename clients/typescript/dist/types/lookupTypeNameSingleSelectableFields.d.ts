import { LookupTypeNameFields } from "./lookupTypeNameFields";
import { VersionType } from "./versionType";
export interface LookupTypeNameSingleSelectableFields {
    includeAllLookupTypeNameFields: boolean | null;
    lookupTypeNameFields: LookupTypeNameFields;
    version1: VersionType;
}
