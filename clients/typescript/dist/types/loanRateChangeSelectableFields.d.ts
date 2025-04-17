import { LoanRateChangeFields } from "./loanRateChangeFields";
import { VersionType } from "./versionType";
export interface LoanRateChangeSelectableFields {
    includeAllLoanRateChangeFields: boolean | null;
    loanRateChangeFields: LoanRateChangeFields;
    version1: VersionType;
}
