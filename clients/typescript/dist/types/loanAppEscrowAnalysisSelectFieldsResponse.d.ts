import { LoanAppEscrowAnalysis } from "./loanAppEscrowAnalysis";
import { VersionType } from "./versionType";
export interface LoanAppEscrowAnalysisSelectFieldsResponse {
    loanAppEscrowAnalysis: LoanAppEscrowAnalysis;
    version1: VersionType;
    messageId: string;
}
