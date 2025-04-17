import { LoanEscrowAnalysis } from "./loanEscrowAnalysis";
import { VersionType } from "./versionType";
export interface LoanEscrowAnalysisSelectFieldsResponse {
    loanEscrowAnalysis: LoanEscrowAnalysis;
    version1: VersionType;
    messageId: string;
}
