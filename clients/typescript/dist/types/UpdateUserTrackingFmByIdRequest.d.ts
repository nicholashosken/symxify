import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { UserTrackingFmFields_2 } from "./userTrackingFmFields_2";
import { VersionType } from "./versionType";
export interface UpdateUserTrackingFmByIdRequest {
    userTrackingFmLocator: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    userTrackingFmFields: UserTrackingFmFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
