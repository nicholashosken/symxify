import { CollateralCollHold } from "./collateralCollHold";
export interface CollateralCollHoldList {
    hasReachedMaximumListSize: boolean | null;
    collateralCollHold: CollateralCollHold[];
}
