import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineFeeSingleSelectableFields } from "./onlineFeeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface OnlineFeeSelectFieldsRequest {
    onlineFeeRuleOrdinal: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: OnlineFeeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}