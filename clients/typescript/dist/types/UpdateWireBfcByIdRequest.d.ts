import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireBfcFields_2 } from "./wireBfcFields_2";
import { VersionType } from "./versionType";
export interface UpdateWireBfcByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireBfcFields: WireBfcFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
