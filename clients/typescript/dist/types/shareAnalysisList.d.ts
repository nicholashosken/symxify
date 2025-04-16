import { ShareAnalysis } from "./shareAnalysis";
export interface ShareAnalysisList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    shareAnalysis: ShareAnalysis[];
    shareAnalysisSpecified: boolean;
}
