import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralFields_2 } from "./collateralFields_2";
import { VersionType } from "./versionType";
export interface CreateCollateralRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    collateralFields: CollateralFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
