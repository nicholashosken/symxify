import { ActivityFilter } from "./activityFilter";
import { UserTrackingFilter } from "./userTrackingFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface UserChildrenFilter {
    activityFilter: ActivityFilter;
    userTrackingFilter: UserTrackingFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
