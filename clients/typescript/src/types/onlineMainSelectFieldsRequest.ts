import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineMainSingleSelectableFields } from "./onlineMainSingleSelectableFields";
import { VersionType } from "./versionType";

export interface OnlineMainSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: OnlineMainSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}