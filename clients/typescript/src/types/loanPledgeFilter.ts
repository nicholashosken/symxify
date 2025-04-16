import { LoanPledgeChildrenFilter } from "./loanPledgeChildrenFilter";

export interface LoanPledgeFilter {
    query: string;
    loanPledgeChildrenFilter: LoanPledgeChildrenFilter;
}