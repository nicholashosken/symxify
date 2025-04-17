import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NameFields_2 } from "./nameFields_2";
import { VersionType } from "./versionType";

export interface CreateNameRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    nameFields: NameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}