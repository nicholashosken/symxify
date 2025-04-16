import { AnalysisPlan } from "./analysisPlan";
export interface AnalysisPlanList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    analysisPlan: AnalysisPlan[];
    analysisPlanSpecified: boolean;
}
