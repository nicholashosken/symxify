import { ShareNameFields } from "./shareNameFields";
import { VersionType } from "./versionType";
export interface ShareNameSelectableFields {
    includeAllShareNameFields: boolean | null;
    shareNameFields: ShareNameFields;
    version1: VersionType;
}
