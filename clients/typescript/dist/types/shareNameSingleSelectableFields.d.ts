import { ShareNameFields } from "./shareNameFields";
import { VersionType } from "./versionType";
export interface ShareNameSingleSelectableFields {
    includeAllShareNameFields: boolean | null;
    shareNameFields: ShareNameFields;
    version1: VersionType;
}
