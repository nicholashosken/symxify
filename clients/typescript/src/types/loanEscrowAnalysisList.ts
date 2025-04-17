import { LoanEscrowAnalysis } from "./loanEscrowAnalysis";

export interface LoanEscrowAnalysisList {
    hasReachedMaximumListSize: boolean | null;
    loanEscrowAnalysis: LoanEscrowAnalysis[];
}