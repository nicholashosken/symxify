import { LoanPledgeName } from "./loanPledgeName";

export interface LoanPledgeNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanPledgeName: LoanPledgeName[];
    loanPledgeNameSpecified: boolean;
}