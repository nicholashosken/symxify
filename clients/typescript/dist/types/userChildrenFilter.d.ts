import { ActivityFilter } from "./activityFilter";
import { UserTrackingFilter } from "./userTrackingFilter";
import { VersionType } from "./versionType";
export interface UserChildrenFilter {
    activityFilter: ActivityFilter;
    userTrackingFilter: UserTrackingFilter;
    version1: VersionType;
}
