import { UserFields } from "./userFields";
import { ActivitySelectableFields } from "./activitySelectableFields";
import { UserTrackingSelectableFields } from "./userTrackingSelectableFields";
import { VersionType } from "./versionType";
export interface UserSelectableFields {
    includeAllUserFields: boolean | null;
    userFields: UserFields;
    activitySelectableFields: ActivitySelectableFields;
    userTrackingSelectableFields: UserTrackingSelectableFields;
    version1: VersionType;
}
