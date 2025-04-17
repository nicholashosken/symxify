import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareTransferFields_2 } from "./shareTransferFields_2";
import { VersionType } from "./versionType";
export interface UpdateShareTransferByIdRequest {
    accountNumber: string;
    shareId: string;
    shareTransferLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareTransferFields: ShareTransferFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
