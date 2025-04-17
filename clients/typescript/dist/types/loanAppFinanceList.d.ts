import { LoanAppFinance } from "./loanAppFinance";
export interface LoanAppFinanceList {
    hasReachedMaximumListSize: boolean | null;
    loanAppFinance: LoanAppFinance[];
}
