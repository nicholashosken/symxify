import { LoanNameFields } from "./loanNameFields";
import { VersionType } from "./versionType";
export interface LoanNameSelectableFields {
    includeAllLoanNameFields: boolean | null;
    loanNameFields: LoanNameFields;
    version1: VersionType;
}
