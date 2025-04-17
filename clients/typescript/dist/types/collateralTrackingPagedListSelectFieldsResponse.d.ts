import { CollateralTracking } from "./collateralTracking";
import { VersionType } from "./versionType";
export interface CollateralTrackingPagedListSelectFieldsResponse {
    collateralTracking: CollateralTracking[];
    token: string;
    version1: VersionType;
    messageId: string;
}
