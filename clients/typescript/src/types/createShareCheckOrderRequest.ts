import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareCheckOrderFields_2 } from "./shareCheckOrderFields_2";
import { VersionType } from "./versionType";

export interface CreateShareCheckOrderRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareCheckOrderFields: ShareCheckOrderFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}