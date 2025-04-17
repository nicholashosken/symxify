import { LoanAppPersonFields } from "./loanAppPersonFields";
import { VersionType } from "./versionType";
export interface LoanAppPersonSingleSelectableFields {
    includeAllLoanAppPersonFields: boolean | null;
    loanAppPersonFields: LoanAppPersonFields;
    version1: VersionType;
}
