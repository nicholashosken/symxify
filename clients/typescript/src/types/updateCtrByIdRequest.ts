import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrFields_2 } from "./ctrFields_2";
import { VersionType } from "./versionType";

export interface UpdateCtrByIdRequest {
    ctrNumber: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    ctrFields: CtrFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}