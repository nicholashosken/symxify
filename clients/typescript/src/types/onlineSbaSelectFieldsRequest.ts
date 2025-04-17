import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineSbaSingleSelectableFields } from "./onlineSbaSingleSelectableFields";
import { VersionType } from "./versionType";

export interface OnlineSbaSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: OnlineSbaSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}