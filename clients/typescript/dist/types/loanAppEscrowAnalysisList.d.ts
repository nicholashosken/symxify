import { LoanAppEscrowAnalysis } from "./loanAppEscrowAnalysis";
export interface LoanAppEscrowAnalysisList {
    hasReachedMaximumListSize: boolean | null;
    loanAppEscrowAnalysis: LoanAppEscrowAnalysis[];
}
