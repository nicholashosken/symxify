import { DealerFmHistory } from "./dealerFmHistory";
export interface DealerFmHistoryList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    dealerFmHistory: DealerFmHistory[];
    dealerFmHistorySpecified: boolean;
}
