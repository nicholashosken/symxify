import { ActivityFields } from "./activityFields";
import { VersionType } from "./versionType";
export interface ActivitySingleSelectableFields {
    includeAllActivityFields: boolean | null;
    activityFields: ActivityFields;
    version1: VersionType;
}
