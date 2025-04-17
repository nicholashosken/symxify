import { ShareAnalysisPlan } from "./shareAnalysisPlan";

export interface ShareAnalysisPlanList {
    hasReachedMaximumListSize: boolean | null;
    shareAnalysisPlan: ShareAnalysisPlan[];
}