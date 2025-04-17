import { CollateralDocumentTracking } from "./collateralDocumentTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralDocumentTrackingPagedListSelectFieldsResponse {
    collateralDocumentTracking: CollateralDocumentTracking[];
    collateralDocumentTrackingSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
