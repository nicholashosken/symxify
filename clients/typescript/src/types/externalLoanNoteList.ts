import { ExternalLoanNote } from "./externalLoanNote";

export interface ExternalLoanNoteList {
    hasReachedMaximumListSize: boolean | null;
    externalLoanNote: ExternalLoanNote[];
}