import { LoanAppLnSegment } from "./loanAppLnSegment";

export interface LoanAppLnSegmentList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppLnSegment: LoanAppLnSegment[];
    loanAppLnSegmentSpecified: boolean;
}