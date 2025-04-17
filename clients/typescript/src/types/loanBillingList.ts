import { LoanBilling } from "./loanBilling";

export interface LoanBillingList {
    hasReachedMaximumListSize: boolean | null;
    loanBilling: LoanBilling[];
}