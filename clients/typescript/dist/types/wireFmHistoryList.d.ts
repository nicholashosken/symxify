import { WireFmHistory } from "./wireFmHistory";
export interface WireFmHistoryList {
    hasReachedMaximumListSize: boolean | null;
    wireFmHistory: WireFmHistory[];
}
