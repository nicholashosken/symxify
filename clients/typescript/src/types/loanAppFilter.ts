import { LoanAppChildrenFilter } from "./loanAppChildrenFilter";

export interface LoanAppFilter {
    query: string;
    loanAppChildrenFilter: LoanAppChildrenFilter;
}