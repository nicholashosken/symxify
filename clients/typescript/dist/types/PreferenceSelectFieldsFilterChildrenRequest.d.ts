import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PreferenceSelectableFields } from "./preferenceSelectableFields";
import { PreferenceChildrenFilter } from "./preferenceChildrenFilter";
import { VersionType } from "./versionType";
export interface PreferenceSelectFieldsFilterChildrenRequest {
    accountNumber: string;
    preferenceLocator: number | null;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    selectableFields: PreferenceSelectableFields;
    childrenSearchFilter: PreferenceChildrenFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}
