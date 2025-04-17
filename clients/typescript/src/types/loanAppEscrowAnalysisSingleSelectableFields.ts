import { LoanAppEscrowAnalysisFields } from "./loanAppEscrowAnalysisFields";
import { VersionType } from "./versionType";

export interface LoanAppEscrowAnalysisSingleSelectableFields {
    includeAllLoanAppEscrowAnalysisFields: boolean | null;
    loanAppEscrowAnalysisFields: LoanAppEscrowAnalysisFields;
    version1: VersionType;
}