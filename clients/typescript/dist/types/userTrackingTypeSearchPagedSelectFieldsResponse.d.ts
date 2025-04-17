import { UserTrackingType } from "./userTrackingType";
import { VersionType } from "./versionType";
export interface UserTrackingTypeSearchPagedSelectFieldsResponse {
    userTrackingType: UserTrackingType[];
    token: string;
    version1: VersionType;
    messageId: string;
}
