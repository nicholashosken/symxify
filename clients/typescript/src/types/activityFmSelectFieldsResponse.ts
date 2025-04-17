import { ActivityFm } from "./activityFm";
import { VersionType } from "./versionType";

export interface ActivityFmSelectFieldsResponse {
    activityFm: ActivityFm;
    version1: VersionType;
    messageId: string;
}