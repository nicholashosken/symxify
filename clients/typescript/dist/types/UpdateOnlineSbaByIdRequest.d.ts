import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineSbaFields_2 } from "./onlineSbaFields_2";
import { VersionType } from "./versionType";
export interface UpdateOnlineSbaByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    onlineSbaFields: OnlineSbaFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
