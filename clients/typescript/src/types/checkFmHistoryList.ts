import { CheckFmHistory } from "./checkFmHistory";

export interface CheckFmHistoryList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    checkFmHistory: CheckFmHistory[];
    checkFmHistorySpecified: boolean;
}