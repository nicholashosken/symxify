import { UserTrackingFmFields } from "./userTrackingFmFields";
import { VersionType } from "./versionType";

export interface UserTrackingFmSingleSelectableFields {
    includeAllUserTrackingFmFields: boolean | null;
    userTrackingFmFields: UserTrackingFmFields;
    version1: VersionType;
}