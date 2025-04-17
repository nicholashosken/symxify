import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AcctTrackingTypeSingleSelectableFields } from "./acctTrackingTypeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface AcctTrackingTypeSelectFieldsRequest {
    acctTrackingTypeRecordSelection: number | null;
    acctTrackingTypeTrackingType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AcctTrackingTypeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}