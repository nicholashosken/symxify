import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { UserTrackingTypeFields_2 } from "./userTrackingTypeFields_2";
import { VersionType } from "./versionType";
export interface UpdateUserTrackingTypeByIdRequest {
    userTrackingTypeRecordSelection: number | null;
    userTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    userTrackingTypeFields: UserTrackingTypeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
