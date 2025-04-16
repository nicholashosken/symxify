import { LoanLnSegment } from "./loanLnSegment";
export interface LoanLnSegmentList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanLnSegment: LoanLnSegment[];
    loanLnSegmentSpecified: boolean;
}
