import { CtrFmHistory } from "./ctrFmHistory";

export interface CtrFmHistoryList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    ctrFmHistory: CtrFmHistory[];
    ctrFmHistorySpecified: boolean;
}