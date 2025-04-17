import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareNameFields_2 } from "./shareNameFields_2";
import { VersionType } from "./versionType";

export interface UpdateShareNameByIdRequest {
    accountNumber: string;
    shareId: string;
    shareNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareNameFields: ShareNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}