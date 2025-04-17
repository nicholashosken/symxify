import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftNameFields_2 } from "./eftNameFields_2";
import { VersionType } from "./versionType";
export interface CreateEftNameRequest {
    accountNumber: string;
    eftLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    eftNameFields: EftNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
