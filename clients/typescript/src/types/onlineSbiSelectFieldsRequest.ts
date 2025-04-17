import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineSbiSingleSelectableFields } from "./onlineSbiSingleSelectableFields";
import { VersionType } from "./versionType";

export interface OnlineSbiSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: OnlineSbiSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}