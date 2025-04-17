import { LoanPledgeName } from "./loanPledgeName";
export interface LoanPledgeNameList {
    hasReachedMaximumListSize: boolean | null;
    loanPledgeName: LoanPledgeName[];
}
