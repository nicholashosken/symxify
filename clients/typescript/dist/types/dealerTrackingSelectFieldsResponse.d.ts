import { DealerTracking } from "./dealerTracking";
import { VersionType } from "./versionType";
export interface DealerTrackingSelectFieldsResponse {
    dealerTracking: DealerTracking;
    version1: VersionType;
    messageId: string;
}
