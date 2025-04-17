import { LoanAppViewAppFields } from "./loanAppViewAppFields";
import { VersionType } from "./versionType";

export interface LoanAppViewAppSingleSelectableFields {
    includeAllLoanAppViewAppFields: boolean | null;
    loanAppViewAppFields: LoanAppViewAppFields;
    version1: VersionType;
}