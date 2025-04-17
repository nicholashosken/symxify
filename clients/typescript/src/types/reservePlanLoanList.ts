import { ReservePlanLoan } from "./reservePlanLoan";

export interface ReservePlanLoanList {
    hasReachedMaximumListSize: boolean | null;
    reservePlanLoan: ReservePlanLoan[];
}