import { LoanAppNote } from "./loanAppNote";

export interface LoanAppNoteList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppNote: LoanAppNote[];
    loanAppNoteSpecified: boolean;
}