import { LoanDefaultFields } from "./loanDefaultFields";
import { VersionType } from "./versionType";

export interface LoanDefaultSingleSelectableFields {
    includeAllLoanDefaultFields: boolean | null;
    loanDefaultFields: LoanDefaultFields;
    version1: VersionType;
}