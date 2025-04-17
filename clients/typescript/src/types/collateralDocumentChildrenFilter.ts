import { CollateralDocumentTrackingFilter } from "./collateralDocumentTrackingFilter";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CollateralDocumentChildrenFilter {
    collateralDocumentTrackingFilter: CollateralDocumentTrackingFilter;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}