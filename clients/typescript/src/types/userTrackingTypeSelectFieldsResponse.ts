import { UserTrackingType } from "./userTrackingType";
import { VersionType } from "./versionType";

export interface UserTrackingTypeSelectFieldsResponse {
    userTrackingType: UserTrackingType;
    version1: VersionType;
    messageId: string;
}