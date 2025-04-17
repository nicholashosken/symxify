import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrAccountFields_2 } from "./ctrAccountFields_2";
import { VersionType } from "./versionType";
export interface UpdateCtrAccountByIdRequest {
    ctrNumber: string;
    ctrAccountLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    ctrAccountFields: CtrAccountFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
