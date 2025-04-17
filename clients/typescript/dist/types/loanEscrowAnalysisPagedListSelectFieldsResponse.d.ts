import { LoanEscrowAnalysis } from "./loanEscrowAnalysis";
import { VersionType } from "./versionType";
export interface LoanEscrowAnalysisPagedListSelectFieldsResponse {
    loanEscrowAnalysis: LoanEscrowAnalysis[];
    token: string;
    version1: VersionType;
    messageId: string;
}
