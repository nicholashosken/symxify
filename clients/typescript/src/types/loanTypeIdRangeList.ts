import { LoanTypeIdRange } from "./loanTypeIdRange";

export interface LoanTypeIdRangeList {
    hasReachedMaximumListSize: boolean | null;
    loanTypeIdRange: LoanTypeIdRange[];
}