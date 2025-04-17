import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftFields_2 } from "./eftFields_2";
import { VersionType } from "./versionType";
export interface CreateEftRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    eftFields: EftFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
