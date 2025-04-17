import { CollateralCollHoldFilter } from "./collateralCollHoldFilter";
import { CollateralDocumentFilter } from "./collateralDocumentFilter";
import { CollateralFmHistoryFilter } from "./collateralFmHistoryFilter";
import { CollateralTrackingFilter } from "./collateralTrackingFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralChildrenFilter {
    collateralCollHoldFilter: CollateralCollHoldFilter;
    collateralDocumentFilter: CollateralDocumentFilter;
    collateralFmHistoryFilter: CollateralFmHistoryFilter;
    collateralTrackingFilter: CollateralTrackingFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
