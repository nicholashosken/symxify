import { ShareDefaultFields } from "./shareDefaultFields";
import { VersionType } from "./versionType";

export interface ShareDefaultSelectableFields {
    includeAllShareDefaultFields: boolean | null;
    shareDefaultFields: ShareDefaultFields;
    version1: VersionType;
}