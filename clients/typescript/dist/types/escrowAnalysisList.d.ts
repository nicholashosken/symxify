import { EscrowAnalysis } from "./escrowAnalysis";
export interface EscrowAnalysisList {
    hasReachedMaximumListSize: boolean | null;
    escrowAnalysis: EscrowAnalysis[];
}
