import { LoanAppMiscFields } from "./loanAppMiscFields";
import { VersionType } from "./versionType";

export interface LoanAppMiscSelectableFields {
    includeAllLoanAppMiscFields: boolean | null;
    loanAppMiscFields: LoanAppMiscFields;
    version1: VersionType;
}