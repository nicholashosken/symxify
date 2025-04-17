import { LoanEscrowFields } from "./loanEscrowFields";
import { VersionType } from "./versionType";

export interface LoanEscrowSelectableFields {
    includeAllLoanEscrowFields: boolean | null;
    loanEscrowFields: LoanEscrowFields;
    version1: VersionType;
}