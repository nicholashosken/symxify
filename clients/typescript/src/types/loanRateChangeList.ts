import { LoanRateChange } from "./loanRateChange";

export interface LoanRateChangeList {
    hasReachedMaximumListSize: boolean | null;
    loanRateChange: LoanRateChange[];
}