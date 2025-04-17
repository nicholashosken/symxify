import { LoanCheckOrderFields } from "./loanCheckOrderFields";
import { VersionType } from "./versionType";

export interface LoanCheckOrderSelectableFields {
    includeAllLoanCheckOrderFields: boolean | null;
    loanCheckOrderFields: LoanCheckOrderFields;
    version1: VersionType;
}