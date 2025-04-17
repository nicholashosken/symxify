import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { MiscPmtFields_2 } from "./miscPmtFields_2";
import { VersionType } from "./versionType";

export interface UpdateMiscPmtByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    miscPmtFields: MiscPmtFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}