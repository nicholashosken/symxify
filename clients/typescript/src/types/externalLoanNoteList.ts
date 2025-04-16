import { ExternalLoanNote } from "./externalLoanNote";

export interface ExternalLoanNoteList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    externalLoanNote: ExternalLoanNote[];
    externalLoanNoteSpecified: boolean;
}