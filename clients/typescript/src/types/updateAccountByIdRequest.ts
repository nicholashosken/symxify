import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AccountFields_2 } from "./accountFields_2";
import { VersionType } from "./versionType";

export interface UpdateAccountByIdRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    accountFields: AccountFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}