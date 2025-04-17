import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { BatchRcFields_2 } from "./batchRcFields_2";
import { VersionType } from "./versionType";

export interface UpdateBatchRcByIdRequest {
    batchRcBatchReturnCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    batchRcFields: BatchRcFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}