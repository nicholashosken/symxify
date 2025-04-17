import { ReservePlanFields } from "./reservePlanFields";
import { ReservePlanLoanSelectableFields } from "./reservePlanLoanSelectableFields";
import { ReservePlanTrackingSelectableFields } from "./reservePlanTrackingSelectableFields";
import { ReservePlanTransactionSelectableFields } from "./reservePlanTransactionSelectableFields";
import { VersionType } from "./versionType";

export interface ReservePlanSelectableFields {
    includeAllReservePlanFields: boolean | null;
    reservePlanFields: ReservePlanFields;
    reservePlanLoanSelectableFields: ReservePlanLoanSelectableFields;
    reservePlanTrackingSelectableFields: ReservePlanTrackingSelectableFields;
    reservePlanTransactionSelectableFields: ReservePlanTransactionSelectableFields;
    version1: VersionType;
}