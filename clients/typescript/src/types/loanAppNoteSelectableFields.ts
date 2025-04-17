import { LoanAppNoteFields } from "./loanAppNoteFields";
import { VersionType } from "./versionType";

export interface LoanAppNoteSelectableFields {
    includeAllLoanAppNoteFields: boolean | null;
    loanAppNoteFields: LoanAppNoteFields;
    version1: VersionType;
}