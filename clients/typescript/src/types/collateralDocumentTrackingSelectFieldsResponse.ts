import { CollateralDocumentTracking } from "./collateralDocumentTracking";
import { VersionType } from "./versionType";

export interface CollateralDocumentTrackingSelectFieldsResponse {
    collateralDocumentTracking: CollateralDocumentTracking;
    version1: VersionType;
    messageId: string;
}