import { UserTrackingTypeFields } from "./userTrackingTypeFields";
import { VersionType } from "./versionType";
export interface UserTrackingTypeSelectableFields {
    includeAllUserTrackingTypeFields: boolean | null;
    userTrackingTypeFields: UserTrackingTypeFields;
    version1: VersionType;
}
