import { LoanAppFinance } from "./loanAppFinance";

export interface LoanAppFinanceList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppFinance: LoanAppFinance[];
    loanAppFinanceSpecified: boolean;
}