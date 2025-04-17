import { LoanNoteFields } from "./loanNoteFields";
import { VersionType } from "./versionType";
export interface LoanNoteSelectableFields {
    includeAllLoanNoteFields: boolean | null;
    loanNoteFields: LoanNoteFields;
    version1: VersionType;
}
