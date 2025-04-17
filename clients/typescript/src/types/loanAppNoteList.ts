import { LoanAppNote } from "./loanAppNote";

export interface LoanAppNoteList {
    hasReachedMaximumListSize: boolean | null;
    loanAppNote: LoanAppNote[];
}