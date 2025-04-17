import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ExternalAccountFields_2 } from "./externalAccountFields_2";
import { VersionType } from "./versionType";
export interface CreateExternalAccountRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    externalAccountFields: ExternalAccountFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
