import { LoanEscrowAnalysisFields } from "./loanEscrowAnalysisFields";
import { VersionType } from "./versionType";

export interface LoanEscrowAnalysisSelectableFields {
    includeAllLoanEscrowAnalysisFields: boolean | null;
    loanEscrowAnalysisFields: LoanEscrowAnalysisFields;
    version1: VersionType;
}