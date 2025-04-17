import { ShareAnalysisGroup } from "./shareAnalysisGroup";

export interface ShareAnalysisGroupList {
    hasReachedMaximumListSize: boolean | null;
    shareAnalysisGroup: ShareAnalysisGroup[];
}