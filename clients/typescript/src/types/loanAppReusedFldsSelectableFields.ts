import { LoanAppReusedFldsFields } from "./loanAppReusedFldsFields";
import { VersionType } from "./versionType";

export interface LoanAppReusedFldsSelectableFields {
    includeAllLoanAppReusedFldsFields: boolean | null;
    loanAppReusedFldsFields: LoanAppReusedFldsFields;
    version1: VersionType;
}