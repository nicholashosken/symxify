import { DealerFmHistory } from "./dealerFmHistory";
export interface DealerFmHistoryList {
    hasReachedMaximumListSize: boolean | null;
    dealerFmHistory: DealerFmHistory[];
}
