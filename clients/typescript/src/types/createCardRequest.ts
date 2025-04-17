import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CardFields_2 } from "./cardFields_2";
import { VersionType } from "./versionType";

export interface CreateCardRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    cardFields: CardFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}