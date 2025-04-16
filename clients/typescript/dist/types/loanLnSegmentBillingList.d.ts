import { LoanLnSegmentBilling } from "./loanLnSegmentBilling";
export interface LoanLnSegmentBillingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanLnSegmentBilling: LoanLnSegmentBilling[];
    loanLnSegmentBillingSpecified: boolean;
}
