import { LoanAppReusedFldsFields } from "./loanAppReusedFldsFields";
import { VersionType } from "./versionType";

export interface LoanAppReusedFldsSingleSelectableFields {
    includeAllLoanAppReusedFldsFields: boolean | null;
    loanAppReusedFldsFields: LoanAppReusedFldsFields;
    version1: VersionType;
}