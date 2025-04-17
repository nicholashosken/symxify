import { ActivityFmFields } from "./activityFmFields";
import { VersionType } from "./versionType";
export interface ActivityFmSingleSelectableFields {
    includeAllActivityFmFields: boolean | null;
    activityFmFields: ActivityFmFields;
    version1: VersionType;
}
