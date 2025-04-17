import { UserTracking } from "./userTracking";
import { VersionType } from "./versionType";

export interface UserTrackingSelectFieldsResponse {
    userTracking: UserTracking;
    version1: VersionType;
    messageId: string;
}