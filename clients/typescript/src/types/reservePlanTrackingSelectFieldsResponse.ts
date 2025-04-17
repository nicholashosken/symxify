import { ReservePlanTracking } from "./reservePlanTracking";
import { VersionType } from "./versionType";

export interface ReservePlanTrackingSelectFieldsResponse {
    reservePlanTracking: ReservePlanTracking;
    version1: VersionType;
    messageId: string;
}