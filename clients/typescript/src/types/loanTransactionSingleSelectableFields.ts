import { LoanTransactionFields } from "./loanTransactionFields";
import { VersionType } from "./versionType";

export interface LoanTransactionSingleSelectableFields {
    includeAllLoanTransactionFields: boolean | null;
    loanTransactionFields: LoanTransactionFields;
    version1: VersionType;
}