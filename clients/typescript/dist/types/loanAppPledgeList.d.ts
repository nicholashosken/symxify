import { LoanAppPledge } from "./loanAppPledge";
export interface LoanAppPledgeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppPledge: LoanAppPledge[];
    loanAppPledgeSpecified: boolean;
}
