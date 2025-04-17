import { UserTracking } from "./userTracking";
import { VersionType } from "./versionType";

export interface UserTrackingSearchPagedSelectFieldsResponse {
    userTracking: UserTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}