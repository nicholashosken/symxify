import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { LateChgFields_2 } from "./lateChgFields_2";
import { VersionType } from "./versionType";

export interface UpdateLateChgByIdRequest {
    lateChgLateChargeType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    lateChgFields: LateChgFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}