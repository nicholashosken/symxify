import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcsGlobalFields_2 } from "./acsGlobalFields_2";
import { VersionType } from "./versionType";
export interface UpdateAcsGlobalByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    acsGlobalFields: AcsGlobalFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
