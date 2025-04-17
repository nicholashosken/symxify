import { LoanAppPrintAppFields } from "./loanAppPrintAppFields";
import { VersionType } from "./versionType";

export interface LoanAppPrintAppSelectableFields {
    includeAllLoanAppPrintAppFields: boolean | null;
    loanAppPrintAppFields: LoanAppPrintAppFields;
    version1: VersionType;
}