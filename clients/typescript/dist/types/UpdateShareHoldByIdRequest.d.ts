import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareHoldFields_2 } from "./shareHoldFields_2";
import { VersionType } from "./versionType";
export interface UpdateShareHoldByIdRequest {
    accountNumber: string;
    shareId: string;
    shareHoldLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareHoldFields: ShareHoldFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
