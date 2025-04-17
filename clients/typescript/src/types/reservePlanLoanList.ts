import { ReservePlanLoan } from "./reservePlanLoan";

export interface ReservePlanLoanList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    reservePlanLoan: ReservePlanLoan[];
    reservePlanLoanSpecified: boolean;
}