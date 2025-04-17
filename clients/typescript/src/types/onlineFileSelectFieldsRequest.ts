import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineFileSingleSelectableFields } from "./onlineFileSingleSelectableFields";
import { VersionType } from "./versionType";

export interface OnlineFileSelectFieldsRequest {
    onlineFileFileRecord: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: OnlineFileSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}