import { LoanAppPerson } from "./loanAppPerson";
export interface LoanAppPersonList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppPerson: LoanAppPerson[];
    loanAppPersonSpecified: boolean;
}
