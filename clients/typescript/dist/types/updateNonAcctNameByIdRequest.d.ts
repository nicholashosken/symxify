import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NonAcctNameFields_2 } from "./nonAcctNameFields_2";
import { VersionType } from "./versionType";
export interface UpdateNonAcctNameByIdRequest {
    nonAcctNameNonAcctNameNum: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    nonAcctNameFields: NonAcctNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
