import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AccountFieldNameFields_2 } from "./accountFieldNameFields_2";
import { VersionType } from "./versionType";

export interface UpdateAccountFieldNameByIdRequest {
    accountFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    accountFieldNameFields: AccountFieldNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}