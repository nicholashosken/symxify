import { CollateralDocumentTracking } from "./collateralDocumentTracking";

export interface CollateralDocumentTrackingList {
    hasReachedMaximumListSize: boolean | null;
    collateralDocumentTracking: CollateralDocumentTracking[];
}