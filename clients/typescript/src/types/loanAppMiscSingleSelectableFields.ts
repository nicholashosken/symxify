import { LoanAppMiscFields } from "./loanAppMiscFields";
import { VersionType } from "./versionType";

export interface LoanAppMiscSingleSelectableFields {
    includeAllLoanAppMiscFields: boolean | null;
    loanAppMiscFields: LoanAppMiscFields;
    version1: VersionType;
}