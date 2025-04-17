import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { NonAcctNameSingleSelectableFields } from "./nonAcctNameSingleSelectableFields";
import { VersionType } from "./versionType";
export interface NonAcctNameSelectFieldsRequest {
    nonAcctNameNonAcctNameNum: string;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: NonAcctNameSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
