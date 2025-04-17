import { ShareTracking } from "./shareTracking";
import { VersionType } from "./versionType";

export interface ShareTrackingPagedListSelectFieldsResponse {
    shareTracking: ShareTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}