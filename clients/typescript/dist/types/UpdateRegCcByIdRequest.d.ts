import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { RegCcFields_2 } from "./regCcFields_2";
import { VersionType } from "./versionType";
export interface UpdateRegCcByIdRequest {
    regCcBranch: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    regCcFields: RegCcFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
