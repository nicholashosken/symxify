import { AnalysisGlobal } from "./analysisGlobal";
export interface AnalysisGlobalList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    analysisGlobal: AnalysisGlobal[];
    analysisGlobalSpecified: boolean;
}
