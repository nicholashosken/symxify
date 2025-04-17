import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MbrAddressFields_2 } from "./mbrAddressFields_2";
import { VersionType } from "./versionType";
export interface CreateMbrAddressRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    mbrAddressFields: MbrAddressFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
