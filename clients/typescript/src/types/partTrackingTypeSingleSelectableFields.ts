import { PartTrackingTypeFields } from "./partTrackingTypeFields";
import { VersionType } from "./versionType";

export interface PartTrackingTypeSingleSelectableFields {
    includeAllPartTrackingTypeFields: boolean | null;
    partTrackingTypeFields: PartTrackingTypeFields;
    version1: VersionType;
}