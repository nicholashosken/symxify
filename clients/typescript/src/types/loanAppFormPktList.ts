import { LoanAppFormPkt } from "./loanAppFormPkt";

export interface LoanAppFormPktList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppFormPkt: LoanAppFormPkt[];
    loanAppFormPktSpecified: boolean;
}