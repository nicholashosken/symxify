import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { WdFeeSingleSelectableFields } from "./wdFeeSingleSelectableFields";
import { VersionType } from "./versionType";

export interface WdFeeSelectFieldsRequest {
    wdFeeWithdrawalFeeType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: WdFeeSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}