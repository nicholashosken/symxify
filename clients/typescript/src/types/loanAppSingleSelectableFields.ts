import { LoanAppFields } from "./loanAppFields";
import { VersionType } from "./versionType";

export interface LoanAppSingleSelectableFields {
    includeAllLoanAppFields: boolean | null;
    loanAppFields: LoanAppFields;
    version1: VersionType;
}