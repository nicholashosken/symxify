import { CollateralCollHoldFilter } from "./collateralCollHoldFilter";
import { CollateralDocumentFilter } from "./collateralDocumentFilter";
import { CollateralFmHistoryFilter } from "./collateralFmHistoryFilter";
import { CollateralTrackingFilter } from "./collateralTrackingFilter";
import { VersionType } from "./versionType";
export interface CollateralChildrenFilter {
    collateralCollHoldFilter: CollateralCollHoldFilter;
    collateralDocumentFilter: CollateralDocumentFilter;
    collateralFmHistoryFilter: CollateralFmHistoryFilter;
    collateralTrackingFilter: CollateralTrackingFilter;
    version1: VersionType;
}
