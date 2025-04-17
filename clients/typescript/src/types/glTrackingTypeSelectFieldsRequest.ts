import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { GlTrackingTypeSingleSelectableFields } from "./glTrackingTypeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface GlTrackingTypeSelectFieldsRequest {
    glTrackingTypeRecordSelection: number | null;
    glTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: GlTrackingTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}