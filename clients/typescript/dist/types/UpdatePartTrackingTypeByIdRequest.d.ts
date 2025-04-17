import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PartTrackingTypeFields_2 } from "./partTrackingTypeFields_2";
import { VersionType } from "./versionType";
export interface UpdatePartTrackingTypeByIdRequest {
    partTrackingTypeRecordSelection: number | null;
    partTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    partTrackingTypeFields: PartTrackingTypeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
