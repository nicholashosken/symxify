import { LoanPledge } from "./loanPledge";
export interface LoanPledgeList {
    hasReachedMaximumListSize: boolean | null;
    loanPledge: LoanPledge[];
}
