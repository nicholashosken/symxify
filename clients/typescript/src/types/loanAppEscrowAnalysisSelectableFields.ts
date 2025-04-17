import { LoanAppEscrowAnalysisFields } from "./loanAppEscrowAnalysisFields";
import { VersionType } from "./versionType";

export interface LoanAppEscrowAnalysisSelectableFields {
    includeAllLoanAppEscrowAnalysisFields: boolean | null;
    loanAppEscrowAnalysisFields: LoanAppEscrowAnalysisFields;
    version1: VersionType;
}