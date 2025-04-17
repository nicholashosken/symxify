import { ActivityFmFields } from "./activityFmFields";
import { VersionType } from "./versionType";

export interface ActivityFmSelectableFields {
    includeAllActivityFmFields: boolean | null;
    activityFmFields: ActivityFmFields;
    version1: VersionType;
}