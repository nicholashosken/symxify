import { LoanLnSegment } from "./loanLnSegment";

export interface LoanLnSegmentList {
    hasReachedMaximumListSize: boolean | null;
    loanLnSegment: LoanLnSegment[];
}