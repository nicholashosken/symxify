import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftFields_2 } from "./eftFields_2";
import { VersionType } from "./versionType";

export interface UpdateEftByIdRequest {
    accountNumber: string;
    eftLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    eftFields: EftFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}