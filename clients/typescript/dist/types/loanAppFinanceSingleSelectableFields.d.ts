import { LoanAppFinanceFields } from "./loanAppFinanceFields";
import { VersionType } from "./versionType";
export interface LoanAppFinanceSingleSelectableFields {
    includeAllLoanAppFinanceFields: boolean | null;
    loanAppFinanceFields: LoanAppFinanceFields;
    version1: VersionType;
}
