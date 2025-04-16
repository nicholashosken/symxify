import { LoanTypeIdRange } from "./loanTypeIdRange";

export interface LoanTypeIdRangeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanTypeIdRange: LoanTypeIdRange[];
    loanTypeIdRangeSpecified: boolean;
}