import { ShareFields } from "./shareFields";
import { VersionType } from "./versionType";
export interface ShareSingleSelectableFields {
    includeAllShareFields: boolean | null;
    shareFields: ShareFields;
    version1: VersionType;
}
