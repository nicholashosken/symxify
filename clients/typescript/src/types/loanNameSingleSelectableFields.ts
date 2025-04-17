import { LoanNameFields } from "./loanNameFields";
import { VersionType } from "./versionType";

export interface LoanNameSingleSelectableFields {
    includeAllLoanNameFields: boolean | null;
    loanNameFields: LoanNameFields;
    version1: VersionType;
}