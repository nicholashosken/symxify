import { EscrowAnalysis } from "./escrowAnalysis";
export interface EscrowAnalysisList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    escrowAnalysis: EscrowAnalysis[];
    escrowAnalysisSpecified: boolean;
}
