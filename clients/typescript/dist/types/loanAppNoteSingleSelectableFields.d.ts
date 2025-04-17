import { LoanAppNoteFields } from "./loanAppNoteFields";
import { VersionType } from "./versionType";
export interface LoanAppNoteSingleSelectableFields {
    includeAllLoanAppNoteFields: boolean | null;
    loanAppNoteFields: LoanAppNoteFields;
    version1: VersionType;
}
