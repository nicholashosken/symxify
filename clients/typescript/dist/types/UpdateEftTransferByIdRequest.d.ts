import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { EftTransferFields_2 } from "./eftTransferFields_2";
import { VersionType } from "./versionType";
export interface UpdateEftTransferByIdRequest {
    accountNumber: string;
    eftLocator: number | null;
    eftTransferLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    eftTransferFields: EftTransferFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
