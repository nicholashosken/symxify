import { LoanAppPrintApp } from "./loanAppPrintApp";

export interface LoanAppPrintAppList {
    hasReachedMaximumListSize: boolean | null;
    loanAppPrintApp: LoanAppPrintApp[];
}