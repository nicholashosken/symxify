import { LoanNoteFields_2 } from "./loanNoteFields_2";

export interface LoanNoteUpdateRequest {
    loanNoteLocator: number | null;
    loanNoteFields: LoanNoteFields_2;
}