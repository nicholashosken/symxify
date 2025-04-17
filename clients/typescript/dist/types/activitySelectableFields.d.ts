import { ActivityFields } from "./activityFields";
import { VersionType } from "./versionType";
export interface ActivitySelectableFields {
    includeAllActivityFields: boolean | null;
    activityFields: ActivityFields;
    version1: VersionType;
}
