import { LoanAppNoteFields_2 } from "./loanAppNoteFields_2";
export interface LoanAppNoteUpdateRequest {
    loanAppNoteLocatorValue: number;
    loanAppNoteLocatorValueSpecified: boolean;
    loanAppNoteLocator: number | null;
    loanAppNoteFields: LoanAppNoteFields_2;
}
