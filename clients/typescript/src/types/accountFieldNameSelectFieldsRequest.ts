import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AccountFieldNameSingleSelectableFields } from "./accountFieldNameSingleSelectableFields";
import { VersionType } from "./versionType";

export interface AccountFieldNameSelectFieldsRequest {
    accountFieldNameField: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AccountFieldNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}