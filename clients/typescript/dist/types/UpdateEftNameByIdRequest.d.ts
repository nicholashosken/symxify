import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftNameFields_2 } from "./eftNameFields_2";
import { VersionType } from "./versionType";
export interface UpdateEftNameByIdRequest {
    accountNumber: string;
    eftLocator: number | null;
    eftNameLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    eftNameFields: EftNameFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
