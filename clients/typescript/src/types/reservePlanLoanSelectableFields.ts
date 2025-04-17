import { ReservePlanLoanFields } from "./reservePlanLoanFields";
import { VersionType } from "./versionType";

export interface ReservePlanLoanSelectableFields {
    includeAllReservePlanLoanFields: boolean | null;
    reservePlanLoanFields: ReservePlanLoanFields;
    version1: VersionType;
}