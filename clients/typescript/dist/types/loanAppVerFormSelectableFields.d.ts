import { LoanAppVerFormFields } from "./loanAppVerFormFields";
import { VersionType } from "./versionType";
export interface LoanAppVerFormSelectableFields {
    includeAllLoanAppVerFormFields: boolean | null;
    loanAppVerFormFields: LoanAppVerFormFields;
    version1: VersionType;
}
