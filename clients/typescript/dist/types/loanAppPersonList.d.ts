import { LoanAppPerson } from "./loanAppPerson";
export interface LoanAppPersonList {
    hasReachedMaximumListSize: boolean | null;
    loanAppPerson: LoanAppPerson[];
}
