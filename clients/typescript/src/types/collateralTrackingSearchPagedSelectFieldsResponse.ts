import { CollateralTracking } from "./collateralTracking";
import { VersionType } from "./versionType";

export interface CollateralTrackingSearchPagedSelectFieldsResponse {
    collateralTracking: CollateralTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}