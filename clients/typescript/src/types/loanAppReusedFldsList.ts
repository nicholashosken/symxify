import { LoanAppReusedFlds } from "./loanAppReusedFlds";

export interface LoanAppReusedFldsList {
    hasReachedMaximumListSize: boolean | null;
    loanAppReusedFlds: LoanAppReusedFlds[];
}