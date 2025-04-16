import { LoanNote } from "./loanNote";
export interface LoanNoteList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanNote: LoanNote[];
    loanNoteSpecified: boolean;
}
