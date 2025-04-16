import { LoanBankruptcy } from "./loanBankruptcy";
export interface LoanBankruptcyList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanBankruptcy: LoanBankruptcy[];
    loanBankruptcySpecified: boolean;
}
