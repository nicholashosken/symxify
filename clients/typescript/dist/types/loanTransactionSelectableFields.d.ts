import { LoanTransactionFields } from "./loanTransactionFields";
import { VersionType } from "./versionType";
export interface LoanTransactionSelectableFields {
    includeAllLoanTransactionFields: boolean | null;
    loanTransactionFields: LoanTransactionFields;
    version1: VersionType;
}
