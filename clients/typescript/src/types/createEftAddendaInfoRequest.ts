import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftAddendaInfoFields_2 } from "./eftAddendaInfoFields_2";
import { VersionType } from "./versionType";

export interface CreateEftAddendaInfoRequest {
    accountNumber: string;
    eftLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    eftAddendaInfoFields: EftAddendaInfoFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}