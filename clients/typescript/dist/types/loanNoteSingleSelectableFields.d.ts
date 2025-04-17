import { LoanNoteFields } from "./loanNoteFields";
import { VersionType } from "./versionType";
export interface LoanNoteSingleSelectableFields {
    includeAllLoanNoteFields: boolean | null;
    loanNoteFields: LoanNoteFields;
    version1: VersionType;
}
