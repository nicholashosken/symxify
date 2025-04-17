import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { UserTrackingFields_2 } from "./userTrackingFields_2";
import { VersionType } from "./versionType";

export interface CreateUserTrackingRequest {
    userNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    userTrackingFields: UserTrackingFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}