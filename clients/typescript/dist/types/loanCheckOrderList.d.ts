import { LoanCheckOrder } from "./loanCheckOrder";
export interface LoanCheckOrderList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanCheckOrder: LoanCheckOrder[];
    loanCheckOrderSpecified: boolean;
}
