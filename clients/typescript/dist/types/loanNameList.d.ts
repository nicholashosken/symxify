import { LoanName } from "./loanName";
export interface LoanNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanName: LoanName[];
    loanNameSpecified: boolean;
}
