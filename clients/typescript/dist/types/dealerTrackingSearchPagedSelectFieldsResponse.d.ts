import { DealerTracking } from "./dealerTracking";
import { VersionType } from "./versionType";
export interface DealerTrackingSearchPagedSelectFieldsResponse {
    dealerTracking: DealerTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}
