import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CrsFields_2 } from "./crsFields_2";
import { VersionType } from "./versionType";
export interface UpdateCrsByIdRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    crsFields: CrsFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
