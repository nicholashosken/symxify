import { UserTracking } from "./userTracking";
import { VersionType } from "./versionType";

export interface UserTrackingPagedListSelectFieldsResponse {
    userTracking: UserTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}