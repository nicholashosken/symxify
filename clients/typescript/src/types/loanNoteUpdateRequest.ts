import { LoanNoteFields_2 } from "./loanNoteFields_2";

export interface LoanNoteUpdateRequest {
    loanNoteLocatorValue: number;
    loanNoteLocatorValueSpecified: boolean;
    loanNoteLocator: number | null;
    loanNoteFields: LoanNoteFields_2;
}