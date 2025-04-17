import { AnalysisPlan } from "./analysisPlan";
export interface AnalysisPlanList {
    hasReachedMaximumListSize: boolean | null;
    analysisPlan: AnalysisPlan[];
}
