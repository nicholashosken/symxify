import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PeriodicMtgFields_2 } from "./periodicMtgFields_2";
import { VersionType } from "./versionType";
export interface UpdatePeriodicMtgByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    periodicMtgFields: PeriodicMtgFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
