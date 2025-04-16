import { LoanPledge } from "./loanPledge";
export interface LoanPledgeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanPledge: LoanPledge[];
    loanPledgeSpecified: boolean;
}
