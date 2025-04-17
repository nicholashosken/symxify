import { LookupTypeNameFields } from "./lookupTypeNameFields";
import { VersionType } from "./versionType";

export interface LookupTypeNameSelectableFields {
    includeAllLookupTypeNameFields: boolean | null;
    lookupTypeNameFields: LookupTypeNameFields;
    version1: VersionType;
}