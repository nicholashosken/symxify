import { LoanName } from "./loanName";
export interface LoanNameList {
    hasReachedMaximumListSize: boolean | null;
    loanName: LoanName[];
}
