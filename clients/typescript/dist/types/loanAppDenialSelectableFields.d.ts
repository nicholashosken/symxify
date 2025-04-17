import { LoanAppDenialFields } from "./loanAppDenialFields";
import { VersionType } from "./versionType";
export interface LoanAppDenialSelectableFields {
    includeAllLoanAppDenialFields: boolean | null;
    loanAppDenialFields: LoanAppDenialFields;
    version1: VersionType;
}
