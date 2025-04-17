import { LoanRateChangeFields } from "./loanRateChangeFields";
import { VersionType } from "./versionType";
export interface LoanRateChangeSingleSelectableFields {
    includeAllLoanRateChangeFields: boolean | null;
    loanRateChangeFields: LoanRateChangeFields;
    version1: VersionType;
}
