import { LoanDefaultFields } from "./loanDefaultFields";
import { VersionType } from "./versionType";
export interface LoanDefaultSelectableFields {
    includeAllLoanDefaultFields: boolean | null;
    loanDefaultFields: LoanDefaultFields;
    version1: VersionType;
}
