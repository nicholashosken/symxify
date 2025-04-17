import { ShareTracking } from "./shareTracking";
import { VersionType } from "./versionType";
export interface ShareTrackingSearchPagedSelectFieldsResponse {
    shareTracking: ShareTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}
