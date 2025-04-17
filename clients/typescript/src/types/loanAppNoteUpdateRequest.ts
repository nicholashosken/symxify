import { LoanAppNoteFields_2 } from "./loanAppNoteFields_2";

export interface LoanAppNoteUpdateRequest {
    loanAppNoteLocator: number | null;
    loanAppNoteFields: LoanAppNoteFields_2;
}