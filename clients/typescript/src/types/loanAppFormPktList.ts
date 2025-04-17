import { LoanAppFormPkt } from "./loanAppFormPkt";

export interface LoanAppFormPktList {
    hasReachedMaximumListSize: boolean | null;
    loanAppFormPkt: LoanAppFormPkt[];
}