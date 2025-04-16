import { LoanBilling } from "./loanBilling";
export interface LoanBillingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanBilling: LoanBilling[];
    loanBillingSpecified: boolean;
}
