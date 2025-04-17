import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { InsTableFields_2 } from "./insTableFields_2";
import { VersionType } from "./versionType";

export interface UpdateInsTableByIdRequest {
    insTableInsuranceTable: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    insTableFields: InsTableFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}