import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineNetSingleSelectableFields } from "./onlineNetSingleSelectableFields";
import { VersionType } from "./versionType";

export interface OnlineNetSelectFieldsRequest {
    onlineNetNetworkMessageFormat: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: OnlineNetSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}