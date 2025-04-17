import { LoanAppFinanceFields } from "./loanAppFinanceFields";
import { VersionType } from "./versionType";
export interface LoanAppFinanceSelectableFields {
    includeAllLoanAppFinanceFields: boolean | null;
    loanAppFinanceFields: LoanAppFinanceFields;
    version1: VersionType;
}
