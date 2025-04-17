import { UserTrackingType } from "./userTrackingType";
import { VersionType } from "./versionType";

export interface UserTrackingTypePagedListSelectFieldsResponse {
    userTrackingType: UserTrackingType[];
    token: string;
    version1: VersionType;
    messageId: string;
}