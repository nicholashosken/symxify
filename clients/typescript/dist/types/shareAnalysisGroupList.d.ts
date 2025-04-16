import { ShareAnalysisGroup } from "./shareAnalysisGroup";
export interface ShareAnalysisGroupList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    shareAnalysisGroup: ShareAnalysisGroup[];
    shareAnalysisGroupSpecified: boolean;
}
