import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { ShareTrackingFields_2 } from "./shareTrackingFields_2";
import { VersionType } from "./versionType";

export interface CreateShareTrackingRequest {
    accountNumber: string;
    shareId: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    shareTrackingFields: ShareTrackingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}