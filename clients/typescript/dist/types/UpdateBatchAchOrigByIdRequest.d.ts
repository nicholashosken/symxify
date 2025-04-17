import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { BatchAchOrigFields_2 } from "./batchAchOrigFields_2";
import { VersionType } from "./versionType";
export interface UpdateBatchAchOrigByIdRequest {
    accountNumber: string;
    batchAchOrigLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    batchAchOrigFields: BatchAchOrigFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
