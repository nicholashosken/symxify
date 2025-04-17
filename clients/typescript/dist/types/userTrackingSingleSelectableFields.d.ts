import { UserTrackingFields } from "./userTrackingFields";
import { VersionType } from "./versionType";
export interface UserTrackingSingleSelectableFields {
    includeAllUserTrackingFields: boolean | null;
    userTrackingFields: UserTrackingFields;
    version1: VersionType;
}
