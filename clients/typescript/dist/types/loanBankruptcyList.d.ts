import { LoanBankruptcy } from "./loanBankruptcy";
export interface LoanBankruptcyList {
    hasReachedMaximumListSize: boolean | null;
    loanBankruptcy: LoanBankruptcy[];
}
