import { ReservePlanLoanFilter } from "./reservePlanLoanFilter";
import { ReservePlanTrackingFilter } from "./reservePlanTrackingFilter";
import { ReservePlanTransactionFilter } from "./reservePlanTransactionFilter";
import { VersionType } from "./versionType";

export interface ReservePlanChildrenFilter {
    reservePlanLoanFilter: ReservePlanLoanFilter;
    reservePlanTrackingFilter: ReservePlanTrackingFilter;
    reservePlanTransactionFilter: ReservePlanTransactionFilter;
    version1: VersionType;
}