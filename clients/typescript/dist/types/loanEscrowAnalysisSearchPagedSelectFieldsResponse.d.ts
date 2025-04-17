import { LoanEscrowAnalysis } from "./loanEscrowAnalysis";
import { VersionType } from "./versionType";
export interface LoanEscrowAnalysisSearchPagedSelectFieldsResponse {
    loanEscrowAnalysis: LoanEscrowAnalysis[];
    token: string;
    version1: VersionType;
    messageId: string;
}
