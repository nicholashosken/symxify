import { ExternalLoanNoteFields_2 } from "./externalLoanNoteFields_2";
export interface ExternalLoanNoteUpdateRequest {
    externalLoanNoteLocatorValue: number;
    externalLoanNoteLocatorValueSpecified: boolean;
    externalLoanNoteLocator: number | null;
    externalLoanNoteFields: ExternalLoanNoteFields_2;
}
