import { ReservePlanTracking } from "./reservePlanTracking";
import { VersionType } from "./versionType";
export interface ReservePlanTrackingPagedListSelectFieldsResponse {
    reservePlanTracking: ReservePlanTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}
