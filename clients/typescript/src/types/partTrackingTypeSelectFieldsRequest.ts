import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PartTrackingTypeSingleSelectableFields } from "./partTrackingTypeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface PartTrackingTypeSelectFieldsRequest {
    partTrackingTypeRecordSelection: number | null;
    partTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PartTrackingTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}