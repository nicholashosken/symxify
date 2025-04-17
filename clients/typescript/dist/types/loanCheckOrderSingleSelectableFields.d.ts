import { LoanCheckOrderFields } from "./loanCheckOrderFields";
import { VersionType } from "./versionType";
export interface LoanCheckOrderSingleSelectableFields {
    includeAllLoanCheckOrderFields: boolean | null;
    loanCheckOrderFields: LoanCheckOrderFields;
    version1: VersionType;
}
