import { CollateralDocumentTracking } from "./collateralDocumentTracking";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollateralDocumentTrackingSelectFieldsResponse {
    collateralDocumentTracking: CollateralDocumentTracking;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
