import { LoanAppVerFormFields } from "./loanAppVerFormFields";
import { VersionType } from "./versionType";
export interface LoanAppVerFormSingleSelectableFields {
    includeAllLoanAppVerFormFields: boolean | null;
    loanAppVerFormFields: LoanAppVerFormFields;
    version1: VersionType;
}
