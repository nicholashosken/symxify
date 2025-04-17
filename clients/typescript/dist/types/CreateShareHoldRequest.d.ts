import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareHoldFields_2 } from "./shareHoldFields_2";
import { VersionType } from "./versionType";
export interface CreateShareHoldRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareHoldFields: ShareHoldFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
