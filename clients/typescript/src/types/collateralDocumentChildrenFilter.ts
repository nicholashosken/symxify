import { CollateralDocumentTrackingFilter } from "./collateralDocumentTrackingFilter";
import { VersionType } from "./versionType";

export interface CollateralDocumentChildrenFilter {
    collateralDocumentTrackingFilter: CollateralDocumentTrackingFilter;
    version1: VersionType;
}