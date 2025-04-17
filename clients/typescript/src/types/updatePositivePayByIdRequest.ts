import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PositivePayFields_2 } from "./positivePayFields_2";
import { VersionType } from "./versionType";

export interface UpdatePositivePayByIdRequest {
    positivePayVendorIndex: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    positivePayFields: PositivePayFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}