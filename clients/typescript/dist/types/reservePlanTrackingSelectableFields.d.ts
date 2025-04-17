import { ReservePlanTrackingFields } from "./reservePlanTrackingFields";
import { VersionType } from "./versionType";
export interface ReservePlanTrackingSelectableFields {
    includeAllReservePlanTrackingFields: boolean | null;
    reservePlanTrackingFields: ReservePlanTrackingFields;
    version1: VersionType;
}
