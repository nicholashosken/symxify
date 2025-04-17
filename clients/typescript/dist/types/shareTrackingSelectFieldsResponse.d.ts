import { ShareTracking } from "./shareTracking";
import { VersionType } from "./versionType";
export interface ShareTrackingSelectFieldsResponse {
    shareTracking: ShareTracking;
    version1: VersionType;
    messageId: string;
}
