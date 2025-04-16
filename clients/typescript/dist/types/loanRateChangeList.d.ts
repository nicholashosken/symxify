import { LoanRateChange } from "./loanRateChange";
export interface LoanRateChangeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanRateChange: LoanRateChange[];
    loanRateChangeSpecified: boolean;
}
