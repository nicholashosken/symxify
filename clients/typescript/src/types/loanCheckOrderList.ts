import { LoanCheckOrder } from "./loanCheckOrder";

export interface LoanCheckOrderList {
    hasReachedMaximumListSize: boolean | null;
    loanCheckOrder: LoanCheckOrder[];
}