import { UserTrackingFields } from "./userTrackingFields";
import { VersionType } from "./versionType";

export interface UserTrackingSelectableFields {
    includeAllUserTrackingFields: boolean | null;
    userTrackingFields: UserTrackingFields;
    version1: VersionType;
}