import { ReservePlanLoanFields } from "./reservePlanLoanFields";
import { VersionType } from "./versionType";

export interface ReservePlanLoanSingleSelectableFields {
    includeAllReservePlanLoanFields: boolean | null;
    reservePlanLoanFields: ReservePlanLoanFields;
    version1: VersionType;
}