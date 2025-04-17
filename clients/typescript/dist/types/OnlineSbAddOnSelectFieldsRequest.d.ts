import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { OnlineSbAddOnSingleSelectableFields } from "./onlineSbAddOnSingleSelectableFields";
import { VersionType } from "./versionType";
export interface OnlineSbAddOnSelectFieldsRequest {
    onlineSbAddOnRuleOrdinal: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: OnlineSbAddOnSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
