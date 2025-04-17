import { CollateralDocumentTracking } from "./collateralDocumentTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralDocumentTrackingSearchPagedSelectFieldsResponse {
    collateralDocumentTracking: CollateralDocumentTracking[];
    collateralDocumentTrackingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
