import { LoanAppVerForm } from "./loanAppVerForm";
export interface LoanAppVerFormList {
    hasReachedMaximumListSize: boolean | null;
    loanAppVerForm: LoanAppVerForm[];
}
