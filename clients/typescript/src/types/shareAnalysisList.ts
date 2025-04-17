import { ShareAnalysis } from "./shareAnalysis";

export interface ShareAnalysisList {
    hasReachedMaximumListSize: boolean | null;
    shareAnalysis: ShareAnalysis[];
}