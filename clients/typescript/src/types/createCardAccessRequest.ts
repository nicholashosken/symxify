import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardAccessFields_2 } from "./cardAccessFields_2";
import { VersionType } from "./versionType";

export interface CreateCardAccessRequest {
    accountNumber: string;
    cardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    cardAccessFields: CardAccessFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}