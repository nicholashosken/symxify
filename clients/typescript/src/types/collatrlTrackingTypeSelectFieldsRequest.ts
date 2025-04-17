import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { CollatrlTrackingTypeSingleSelectableFields } from "./collatrlTrackingTypeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface CollatrlTrackingTypeSelectFieldsRequest {
    collatrlTrackingTypeRecordSelection: number | null;
    collatrlTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: CollatrlTrackingTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}