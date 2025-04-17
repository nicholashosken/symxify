import { CollateralTracking } from "./collateralTracking";
import { VersionType } from "./versionType";
export interface CollateralTrackingSelectFieldsResponse {
    collateralTracking: CollateralTracking;
    version1: VersionType;
    messageId: string;
}
