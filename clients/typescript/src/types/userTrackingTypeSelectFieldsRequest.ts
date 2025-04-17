import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { UserTrackingTypeSingleSelectableFields } from "./userTrackingTypeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface UserTrackingTypeSelectFieldsRequest {
    userTrackingTypeRecordSelection: number | null;
    userTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: UserTrackingTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}