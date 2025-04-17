import { AdminCredentialsChoice } from "./adminCredentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AccountDefaultSingleSelectableFields } from "./accountDefaultSingleSelectableFields";
import { VersionType } from "./versionType";
export interface AccountDefaultSelectFieldsRequest {
    accountDefaultAcctType: number | null;
    credentials: AdminCredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AccountDefaultSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
