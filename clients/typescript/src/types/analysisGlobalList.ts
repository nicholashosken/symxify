import { AnalysisGlobal } from "./analysisGlobal";

export interface AnalysisGlobalList {
    hasReachedMaximumListSize: boolean | null;
    analysisGlobal: AnalysisGlobal[];
}