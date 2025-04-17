import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralTrackingFields_2 } from "./collateralTrackingFields_2";
import { VersionType } from "./versionType";
export interface CreateCollateralTrackingRequest {
    collateralNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    collateralTrackingFields: CollateralTrackingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
