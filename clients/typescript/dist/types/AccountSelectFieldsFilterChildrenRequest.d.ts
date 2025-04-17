import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { AccountSelectableFields } from "./accountSelectableFields";
import { AccountChildrenFilter } from "./accountChildrenFilter";
import { VersionType } from "./versionType";
export interface AccountSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: AccountSelectableFields;
    childrenSearchFilter: AccountChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
