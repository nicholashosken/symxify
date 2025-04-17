import { CheckFmHistory } from "./checkFmHistory";

export interface CheckFmHistoryList {
    hasReachedMaximumListSize: boolean | null;
    checkFmHistory: CheckFmHistory[];
}