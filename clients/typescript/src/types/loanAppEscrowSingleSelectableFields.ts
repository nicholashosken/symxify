import { LoanAppEscrowFields } from "./loanAppEscrowFields";
import { VersionType } from "./versionType";

export interface LoanAppEscrowSingleSelectableFields {
    includeAllLoanAppEscrowFields: boolean | null;
    loanAppEscrowFields: LoanAppEscrowFields;
    version1: VersionType;
}