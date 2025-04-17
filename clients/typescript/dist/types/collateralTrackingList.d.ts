import { CollateralTracking } from "./collateralTracking";
export interface CollateralTrackingList {
    hasReachedMaximumListSize: boolean | null;
    collateralTracking: CollateralTracking[];
}
