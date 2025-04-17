import { UserTrackingFm } from "./userTrackingFm";
import { VersionType } from "./versionType";

export interface UserTrackingFmSelectFieldsResponse {
    userTrackingFm: UserTrackingFm;
    version1: VersionType;
    messageId: string;
}