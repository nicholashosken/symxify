import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { DivTableFields_2 } from "./divTableFields_2";
import { VersionType } from "./versionType";

export interface UpdateDivTableByIdRequest {
    divTableType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    divTableFields: DivTableFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}