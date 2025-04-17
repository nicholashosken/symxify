import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AccountSingleSelectableFields } from "./accountSingleSelectableFields";
import { VersionType } from "./versionType";

export interface AccountSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AccountSingleSelectableFields;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}