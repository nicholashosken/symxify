import { LoanAppDefaultFields } from "./loanAppDefaultFields";
import { VersionType } from "./versionType";
export interface LoanAppDefaultSingleSelectableFields {
    includeAllLoanAppDefaultFields: boolean | null;
    loanAppDefaultFields: LoanAppDefaultFields;
    version1: VersionType;
}
