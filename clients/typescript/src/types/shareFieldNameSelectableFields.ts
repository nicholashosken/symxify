import { ShareFieldNameFields } from "./shareFieldNameFields";
import { VersionType } from "./versionType";

export interface ShareFieldNameSelectableFields {
    includeAllShareFieldNameFields: boolean | null;
    shareFieldNameFields: ShareFieldNameFields;
    version1: VersionType;
}