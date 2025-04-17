import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineSbiFields_2 } from "./onlineSbiFields_2";
import { VersionType } from "./versionType";

export interface UpdateOnlineSbiByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineSbiFields: OnlineSbiFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}