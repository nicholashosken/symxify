import { CollateralDocumentTracking } from "./collateralDocumentTracking";
import { VersionType } from "./versionType";
export interface CollateralDocumentTrackingPagedListSelectFieldsResponse {
    collateralDocumentTracking: CollateralDocumentTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}
