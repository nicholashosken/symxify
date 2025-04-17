import { LoanAppLnSegment } from "./loanAppLnSegment";
export interface LoanAppLnSegmentList {
    hasReachedMaximumListSize: boolean | null;
    loanAppLnSegment: LoanAppLnSegment[];
}
