import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollatrlTrackingTypeFields_2 } from "./collatrlTrackingTypeFields_2";
import { VersionType } from "./versionType";
export interface UpdateCollatrlTrackingTypeByIdRequest {
    collatrlTrackingTypeRecordSelection: number | null;
    collatrlTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    collatrlTrackingTypeFields: CollatrlTrackingTypeFields_2;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
