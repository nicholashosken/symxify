import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MiscFields_2 } from "./miscFields_2";
import { VersionType } from "./versionType";

export interface UpdateMiscByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    miscFields: MiscFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}