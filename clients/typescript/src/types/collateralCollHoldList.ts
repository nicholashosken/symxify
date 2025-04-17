import { CollateralCollHold } from "./collateralCollHold";

export interface CollateralCollHoldList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    collateralCollHold: CollateralCollHold[];
    collateralCollHoldSpecified: boolean;
}