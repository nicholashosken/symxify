import { CollateralDocumentTracking } from "./collateralDocumentTracking";
import { VersionType } from "./versionType";

export interface CollateralDocumentTrackingSearchPagedSelectFieldsResponse {
    collateralDocumentTracking: CollateralDocumentTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}