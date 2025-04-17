import { LoanFields } from "./loanFields";
import { VersionType } from "./versionType";
export interface LoanSingleSelectableFields {
    includeAllLoanFields: boolean | null;
    loanFields: LoanFields;
    version1: VersionType;
}
