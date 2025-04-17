import { PartTrackingTypeFields } from "./partTrackingTypeFields";
import { VersionType } from "./versionType";
export interface PartTrackingTypeSelectableFields {
    includeAllPartTrackingTypeFields: boolean | null;
    partTrackingTypeFields: PartTrackingTypeFields;
    version1: VersionType;
}
