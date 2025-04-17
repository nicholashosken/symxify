import { CollateralTracking } from "./collateralTracking";

export interface CollateralTrackingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    collateralTracking: CollateralTracking[];
    collateralTrackingSpecified: boolean;
}