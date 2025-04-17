import { ReservePlanFields } from "./reservePlanFields";
import { VersionType } from "./versionType";

export interface ReservePlanSingleSelectableFields {
    includeAllReservePlanFields: boolean | null;
    reservePlanFields: ReservePlanFields;
    version1: VersionType;
}