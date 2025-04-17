import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareTransferFields_2 } from "./shareTransferFields_2";
import { VersionType } from "./versionType";

export interface CreateShareTransferRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareTransferFields: ShareTransferFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}