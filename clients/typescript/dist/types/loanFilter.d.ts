import { LoanChildrenFilter } from "./loanChildrenFilter";
export interface LoanFilter {
    query: string;
    loanChildrenFilter: LoanChildrenFilter;
}
