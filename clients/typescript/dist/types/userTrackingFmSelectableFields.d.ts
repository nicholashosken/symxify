import { UserTrackingFmFields } from "./userTrackingFmFields";
import { VersionType } from "./versionType";
export interface UserTrackingFmSelectableFields {
    includeAllUserTrackingFmFields: boolean | null;
    userTrackingFmFields: UserTrackingFmFields;
    version1: VersionType;
}
