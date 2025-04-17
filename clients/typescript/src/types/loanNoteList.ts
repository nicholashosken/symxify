import { LoanNote } from "./loanNote";

export interface LoanNoteList {
    hasReachedMaximumListSize: boolean | null;
    loanNote: LoanNote[];
}