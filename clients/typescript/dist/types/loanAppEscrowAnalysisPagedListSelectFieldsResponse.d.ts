import { LoanAppEscrowAnalysis } from "./loanAppEscrowAnalysis";
import { VersionType } from "./versionType";
export interface LoanAppEscrowAnalysisPagedListSelectFieldsResponse {
    loanAppEscrowAnalysis: LoanAppEscrowAnalysis[];
    token: string;
    version1: VersionType;
    messageId: string;
}
