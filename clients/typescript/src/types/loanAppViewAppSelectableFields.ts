import { LoanAppViewAppFields } from "./loanAppViewAppFields";
import { VersionType } from "./versionType";

export interface LoanAppViewAppSelectableFields {
    includeAllLoanAppViewAppFields: boolean | null;
    loanAppViewAppFields: LoanAppViewAppFields;
    version1: VersionType;
}