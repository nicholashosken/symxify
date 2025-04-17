import { LoanLnSegmentBilling } from "./loanLnSegmentBilling";

export interface LoanLnSegmentBillingList {
    hasReachedMaximumListSize: boolean | null;
    loanLnSegmentBilling: LoanLnSegmentBilling[];
}