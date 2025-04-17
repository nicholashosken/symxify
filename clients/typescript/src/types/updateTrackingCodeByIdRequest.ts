import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { TrackingCodeFields_2 } from "./trackingCodeFields_2";
import { VersionType } from "./versionType";

export interface UpdateTrackingCodeByIdRequest {
    trackingCodeCode: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    trackingCodeFields: TrackingCodeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}