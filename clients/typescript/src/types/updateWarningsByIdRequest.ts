import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WarningsFields_2 } from "./warningsFields_2";
import { VersionType } from "./versionType";

export interface UpdateWarningsByIdRequest {
    warningsWarningNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    warningsFields: WarningsFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}