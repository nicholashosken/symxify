import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollateralTypeFields_2 } from "./collateralTypeFields_2";
import { VersionType } from "./versionType";
export interface UpdateCollateralTypeByIdRequest {
    collateralTypeCollateralType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    collateralTypeFields: CollateralTypeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
