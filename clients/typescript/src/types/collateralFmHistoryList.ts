import { CollateralFmHistory } from "./collateralFmHistory";

export interface CollateralFmHistoryList {
    hasReachedMaximumListSize: boolean | null;
    collateralFmHistory: CollateralFmHistory[];
}