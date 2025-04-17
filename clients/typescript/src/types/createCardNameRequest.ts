import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardNameFields_2 } from "./cardNameFields_2";
import { VersionType } from "./versionType";

export interface CreateCardNameRequest {
    accountNumber: string;
    cardLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    cardNameFields: CardNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}