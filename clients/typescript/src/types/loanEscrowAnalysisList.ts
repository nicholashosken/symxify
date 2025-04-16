import { LoanEscrowAnalysis } from "./loanEscrowAnalysis";

export interface LoanEscrowAnalysisList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanEscrowAnalysis: LoanEscrowAnalysis[];
    loanEscrowAnalysisSpecified: boolean;
}