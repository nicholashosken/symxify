import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WireMiscFields_2 } from "./wireMiscFields_2";
import { VersionType } from "./versionType";

export interface UpdateWireMiscByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    wireMiscFields: WireMiscFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}