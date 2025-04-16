import { LoanAppEscrowAnalysis } from "./loanAppEscrowAnalysis";

export interface LoanAppEscrowAnalysisList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    loanAppEscrowAnalysis: LoanAppEscrowAnalysis[];
    loanAppEscrowAnalysisSpecified: boolean;
}