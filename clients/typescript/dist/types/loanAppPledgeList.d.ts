import { LoanAppPledge } from "./loanAppPledge";
export interface LoanAppPledgeList {
    hasReachedMaximumListSize: boolean | null;
    loanAppPledge: LoanAppPledge[];
}
