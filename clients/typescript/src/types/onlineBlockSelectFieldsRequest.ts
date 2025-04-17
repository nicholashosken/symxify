import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineBlockSingleSelectableFields } from "./onlineBlockSingleSelectableFields";
import { VersionType } from "./versionType";

export interface OnlineBlockSelectFieldsRequest {
    onlineBlockRuleNumber: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: OnlineBlockSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}