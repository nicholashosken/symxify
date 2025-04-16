import { FmHistory } from "./fmHistory";

export interface FmHistoryList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    fmHistory: FmHistory[];
    fmHistorySpecified: boolean;
}