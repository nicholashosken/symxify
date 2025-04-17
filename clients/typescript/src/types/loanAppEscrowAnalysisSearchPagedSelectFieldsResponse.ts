import { LoanAppEscrowAnalysis } from "./loanAppEscrowAnalysis";
import { VersionType } from "./versionType";

export interface LoanAppEscrowAnalysisSearchPagedSelectFieldsResponse {
    loanAppEscrowAnalysis: LoanAppEscrowAnalysis[];
    token: string;
    version1: VersionType;
    messageId: string;
}