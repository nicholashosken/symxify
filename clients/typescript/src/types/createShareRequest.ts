import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareFields_2 } from "./shareFields_2";
import { VersionType } from "./versionType";

export interface CreateShareRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareFields: ShareFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}