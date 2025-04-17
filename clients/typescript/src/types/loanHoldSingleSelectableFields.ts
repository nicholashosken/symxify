import { LoanHoldFields } from "./loanHoldFields";
import { VersionType } from "./versionType";

export interface LoanHoldSingleSelectableFields {
    includeAllLoanHoldFields: boolean | null;
    loanHoldFields: LoanHoldFields;
    version1: VersionType;
}