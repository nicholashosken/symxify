import { LoanAppPrintApp } from "./loanAppPrintApp";

export interface LoanAppPrintAppList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppPrintApp: LoanAppPrintApp[];
    loanAppPrintAppSpecified: boolean;
}