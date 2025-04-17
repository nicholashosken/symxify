import { UserTrackingTypeFields } from "./userTrackingTypeFields";
import { VersionType } from "./versionType";

export interface UserTrackingTypeSingleSelectableFields {
    includeAllUserTrackingTypeFields: boolean | null;
    userTrackingTypeFields: UserTrackingTypeFields;
    version1: VersionType;
}