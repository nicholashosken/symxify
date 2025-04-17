import { FmHistory } from "./fmHistory";
export interface FmHistoryList {
    hasReachedMaximumListSize: boolean | null;
    fmHistory: FmHistory[];
}
