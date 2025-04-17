import { CtrFmHistory } from "./ctrFmHistory";

export interface CtrFmHistoryList {
    hasReachedMaximumListSize: boolean | null;
    ctrFmHistory: CtrFmHistory[];
}