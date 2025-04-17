import { CollateralFmHistory } from "./collateralFmHistory";
export interface CollateralFmHistoryList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    collateralFmHistory: CollateralFmHistory[];
    collateralFmHistorySpecified: boolean;
}
