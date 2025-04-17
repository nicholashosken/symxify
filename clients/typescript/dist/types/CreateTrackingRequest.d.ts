import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TrackingFields_2 } from "./trackingFields_2";
import { VersionType } from "./versionType";
export interface CreateTrackingRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    trackingFields: TrackingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
