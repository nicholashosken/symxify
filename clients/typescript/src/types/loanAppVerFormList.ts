import { LoanAppVerForm } from "./loanAppVerForm";

export interface LoanAppVerFormList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppVerForm: LoanAppVerForm[];
    loanAppVerFormSpecified: boolean;
}