import { ReservePlanTrackingFields } from "./reservePlanTrackingFields";
import { VersionType } from "./versionType";
export interface ReservePlanTrackingSingleSelectableFields {
    includeAllReservePlanTrackingFields: boolean | null;
    reservePlanTrackingFields: ReservePlanTrackingFields;
    version1: VersionType;
}
