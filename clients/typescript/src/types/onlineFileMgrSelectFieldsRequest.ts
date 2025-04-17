import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineFileMgrSingleSelectableFields } from "./onlineFileMgrSingleSelectableFields";
import { VersionType } from "./versionType";

export interface OnlineFileMgrSelectFieldsRequest {
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: OnlineFileMgrSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}