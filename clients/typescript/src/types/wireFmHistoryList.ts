import { WireFmHistory } from "./wireFmHistory";

export interface WireFmHistoryList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wireFmHistory: WireFmHistory[];
    wireFmHistorySpecified: boolean;
}