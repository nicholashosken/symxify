import { ShareAnalysisPlan } from "./shareAnalysisPlan";

export interface ShareAnalysisPlanList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    shareAnalysisPlan: ShareAnalysisPlan[];
    shareAnalysisPlanSpecified: boolean;
}