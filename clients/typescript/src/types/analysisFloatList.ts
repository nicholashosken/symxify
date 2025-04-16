import { AnalysisFloat } from "./analysisFloat";

export interface AnalysisFloatList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    analysisFloat: AnalysisFloat[];
    analysisFloatSpecified: boolean;
}