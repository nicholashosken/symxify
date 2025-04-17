import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MoProductFields_2 } from "./moProductFields_2";
import { VersionType } from "./versionType";

export interface UpdateMoProductByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    moProductFields: MoProductFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}