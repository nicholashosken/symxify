import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { VersionType } from "./versionType";
export interface DeleteShareCheckOrderRequest {
    accountNumber: string;
    shareId: string;
    shareCheckOrderLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
