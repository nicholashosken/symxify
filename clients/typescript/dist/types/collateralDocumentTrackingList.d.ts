import { CollateralDocumentTracking } from "./collateralDocumentTracking";
export interface CollateralDocumentTrackingList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    collateralDocumentTracking: CollateralDocumentTracking[];
    collateralDocumentTrackingSpecified: boolean;
}
