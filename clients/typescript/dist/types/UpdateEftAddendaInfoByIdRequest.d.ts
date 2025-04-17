import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftAddendaInfoFields_2 } from "./eftAddendaInfoFields_2";
import { VersionType } from "./versionType";
export interface UpdateEftAddendaInfoByIdRequest {
    accountNumber: string;
    eftLocator: number | null;
    eftAddendaInfoLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    eftAddendaInfoFields: EftAddendaInfoFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
