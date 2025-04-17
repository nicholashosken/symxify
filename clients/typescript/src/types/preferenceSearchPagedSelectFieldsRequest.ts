import { CredentialsChoice } from "./credentialsChoice";
import { DeviceInformation } from "./deviceInformation";
import { PagingRequestContext } from "./pagingRequestContext";
import { PreferenceSingleSelectableFields } from "./preferenceSingleSelectableFields";
import { PreferenceSearchFilter } from "./preferenceSearchFilter";
import { VersionType } from "./versionType";

export interface PreferenceSearchPagedSelectFieldsRequest {
    accountNumber: string;
    credentials: CredentialsChoice;
    deviceInformation: DeviceInformation;
    pagingRequestContext: PagingRequestContext;
    selectableFields: PreferenceSingleSelectableFields;
    searchFilter: PreferenceSearchFilter;
    version1: VersionType;
    messageId: string;
    branchId: number | null;
}