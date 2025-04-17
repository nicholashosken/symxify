import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { SecFieldSingleSelectableFields } from "./secFieldSingleSelectableFields";
import { VersionType } from "./versionType";

export interface SecFieldSelectFieldsRequest {
    secFieldRecordSelection: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: SecFieldSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}