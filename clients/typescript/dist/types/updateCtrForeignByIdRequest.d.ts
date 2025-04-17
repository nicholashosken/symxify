import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CtrForeignFields_2 } from "./ctrForeignFields_2";
import { VersionType } from "./versionType";
export interface UpdateCtrForeignByIdRequest {
    ctrNumber: string;
    ctrForeignLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    ctrForeignFields: CtrForeignFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
